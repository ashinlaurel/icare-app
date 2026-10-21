// READ ONLY. Compatible with the existing production MongoDB 4.4 mongo shell.
// Run: mongo --quiet icare /private/operator/path/production-preflight.mongo.js
if (db.getName() !== 'icare') throw new Error('Expected production database icare; no writes performed');
var topology = db.adminCommand({ hello: 1 });
if (!topology.ok) topology = db.adminCommand({ isMaster: 1 });
if (!topology.ok) throw new Error('Cannot determine MongoDB topology');
var selfIds = db.assets.countDocuments({ $expr: { $eq: ['$unitId', '$_id'] } }, { maxTimeMS: 15000 });
var dangling = db.assets.aggregate([
  { $lookup: { from: 'units', localField: 'unitId', foreignField: '_id', as: 'matchedUnits' } },
  { $match: { matchedUnits: { $size: 0 } } },
  { $count: 'count' }
], { maxTimeMS: 15000 }).toArray();
print(JSON.stringify({
  repair: 'R001', mode: 'READ_ONLY_PREFLIGHT', database: db.getName(), time: new Date(),
  version: db.version(), replicaSet: topology.setName || null,
  standalone: !topology.setName && topology.msg !== 'isdbgrid',
  selfIdUnitReferences: selfIds, danglingUnitReferences: dangling.length ? dangling[0].count : 0,
  counts: ['assets', 'units', 'customerlogins', 'calls', 'servers', 'originalproducts'].map(function (name) {
    return { collection: name, count: db.getCollection(name).countDocuments({}, { maxTimeMS: 15000 }) };
  }),
  productionApplySupportedByStagingRunner: false
}));
