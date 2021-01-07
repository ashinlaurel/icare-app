exports.createAsset = async (req, res) => {
  let { asset, product } = req.body;
  let tempAssetId = "";
  // console.log(asset);
  // console.log(product);

  asset._id = Schema.Types.ObjectId();
  const theasset = new Asset();
  try {
    // Saving the asset
    await theasset.save((err, asset) => {
      if (err || !asset) {
        return res.status(400).json({
          error: "Can't save asset!",
        });
      }
      console.log(asset);
      //Embedding asset id inside product
      product.asset = asset._id;
      // console.log(product);
      // Storing the asset id inside temp for later use
      tempAssetId = asset._id;
      // return res.status(200).json(asset);
      // console.log(tempAssetId);

      return res.status(200).json();
    });
    const theprod = new Server(product);
    // theprod.asset = tempAssetId;
    await theprod.save((err, prod) => {
      if (err || !prod) {
        return res.status(400).json({
          error: "Can't save asset!",
        });
      }
      // console.log(tempAssetId);

      Asset.findById(tempAssetId, function (err, asset) {
        // console.log(asset);
        asset.product = prod._id;
        asset.save();
        // return res.status(200).json(asset);
        return res.status(200).json();
      });

      return res.status(200).json();
    });
    // return res.status(200).json(finalasset);
    return res.status(200).json();
  } catch (error) {
    throw error;
  }
};
