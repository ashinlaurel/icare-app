import React, { useState } from "react";
import { Link } from "react-router-dom";
const InitialScreen = () => {
  const [drop, setDrop] = useState(false);

  return (
    <div className="mx-auto bg-grey-400">
      {/*Screen*/}
      <div className="min-h-screen flex flex-col">
        {/*Navbar-------------------------------------------------------*/}
        <div className="flex items-center justify-between flex-wrap bg-gray-900 px-4  ">
          <div className="flex justify-between w-full">
            <div className="p-1 mx-3 inline-flex items-center">
              <i
                className="fas fa-bars pr-2 text-white"
                onclick="sidebarToggle()"
              />
              <h1 className="text-white text-4xl p-2 ml-10 font-bold">
                InfoCare
              </h1>
            </div>
            <div className="p-1 flex flex-row items-center relative ">
              <a
                href="#"
                onClick={() => setDrop(!drop)}
                className="text-white p-2 no-underline hidden md:block lg:block "
              >
                Adam Wathan
              </a>

              <img
                onclick="profileToggle()"
                onClick={() => setDrop(!drop)}
                className="inline-block h-8 w-8 rounded-full cursor-pointer"
                src="https://avatars0.githubusercontent.com/u/4323180?s=460&v=4"
                alt
              />

              {/* DropDown---------------------- */}
              {drop ? (
                <div className="rounded shadow-md bg-white absolute right-0 mt-40 mr-5  ">
                  <ul className="list-reset">
                    <li>
                      <Link
                        to="/login"
                        className="no-underline px-4 py-2 block text-black hover:bg-grey-light"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="signup"
                        className="no-underline px-4 py-2 block text-black hover:bg-grey-light"
                      >
                        Register
                      </Link>
                    </li>
                    <li>
                      <hr className="border-t mx-2 border-grey-ligght" />
                    </li>
                    <li>
                      <Link
                        to=""
                        className="no-underline px-4 py-2 block text-black hover:bg-grey-light"
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        {/*Navbar-------------------------------------------------------*/}

        {/*----------------------------------Body-------------------------------------------------------*/}

        <div className="flex flex-1">
          {/*Sidebar------------------------------------------------*/}

          <div className="bg-gray-900 w-1/2 md:w-1/6 lg:w-1/6 border-r hidden md:block lg:block">
            <div className="w-full flex items-center justify-center my-6">
              <img
                className="w-1/2 h-1/2 "
                src="https://png.pngtree.com/template/20190927/ourlarge/pngtree-abstract-letter-dp-minimal-logo-design-template-image_311997.jpg"
              />
            </div>
            <ul className="list-reset flex flex-col items-center justify-center ">
              <li className=" w-3/4 h-full py-3 px-2 text-center  my-2 hover:bg-opacity-25 hover:bg-gray-600 ">
                <a
                  href="index.html"
                  className=" text-sm text-white no-underline text-xl "
                >
                  <i className=" float-left mx-2 " />
                  Dashboard
                </a>
              </li>
              <li className=" w-3/4 h-full py-3 px-2 text-center  my-2 hover:bg-opacity-25 hover:bg-gray-600 ">
                <a
                  href="index.html"
                  className=" text-sm text-white no-underline text-xl "
                >
                  <i className=" float-left mx-2" />
                  Assets
                </a>
              </li>
              <li className=" w-3/4 h-full py-3 px-2 text-center  my-2 hover:bg-opacity-25 hover:bg-gray-600 ">
                <a
                  href="index.html"
                  className=" text-sm text-white no-underline text-xl"
                >
                  <i className=" float-left mx-2" />
                  Inventory
                </a>
              </li>
            </ul>
          </div>
          {/*/Sidebar-------------------------------------------------------------------*/}
          {/*Main*/}
          <div className="bg-white-300 flex-1 p-3 overflow-hidden">
            {/* -------------------Example Table--------------------- */}
            <div class="bg-white rounded-lg shadow-lg py-6">
              <div class="block overflow-x-auto mx-6">
                <table class="w-full text-left rounded-lg">
                  <thead>
                    <tr class="text-gray-800 border border-b-0">
                      <th class="px-4 py-3">#</th>
                      <th class="px-4 py-3">Name</th>
                      <th class="px-4 py-3">Avatar</th>
                      <th class="px-4 py-3">Email</th>
                      <th class="px-4 py-3">Status</th>
                      <th class="px-4 py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="w-full font-light text-gray-700 bg-gray-100 whitespace-no-wrap border border-b-0">
                      <td class="px-4 py-4">1</td>
                      <td class="px-4 py-4">Bedram Tamang</td>
                      <td class="px-4 py-4">
                        <img
                          class="h-6 w-6 rounded-full"
                          src="/assets/docs/master/image-01.jpg"
                        />
                      </td>
                      <td class="px-4 py-4">tmgbedu@gmail.com</td>
                      <td class="px-4 py-4">
                        <span class="text-sm bg-green-500 text-white rounded-full px-2 py-1">
                          Active
                        </span>
                      </td>
                      <td class="text-center py-4">
                        <a href="#">
                          <span class="fill-current text-green-500 material-icons">
                            edit
                          </span>
                        </a>
                        <a href="#">
                          <span class="fill-current text-red-500 material-icons">
                            highlight_off
                          </span>
                        </a>
                      </td>
                    </tr>
                    <tr class="w-full font-light text-gray-700 whitespace-no-wrap border">
                      <td class="px-4 py-4">2</td>
                      <td class="px-4 py-4">Taylor Otwel</td>
                      <td class="px-4 py-4">
                        <img
                          class="h-6 w-6 rounded-full"
                          src="/assets/docs/master/image-01.jpg"
                        />
                      </td>
                      <td class="px-4 py-4">taylow@laravel.com</td>
                      <td class="px-4 py-4">
                        <span class="text-sm bg-yellow-500 text-white rounded-full px-2 py-1">
                          Pending
                        </span>
                      </td>
                      <td class="text-center py-4">
                        <a href="#">
                          <span class="fill-current text-green-500 material-icons">
                            edit
                          </span>
                        </a>
                        <a href="#">
                          <span class="fill-current text-red-500 material-icons">
                            highlight_off
                          </span>
                        </a>
                      </td>
                    </tr>
                    <tr class="w-full font-light text-gray-700 bg-gray-100 whitespace-no-wrap border">
                      <td class="px-4 py-4">3</td>
                      <td class="px-4 py-4">Adam wathan</td>
                      <td class="px-4 py-4">
                        <img
                          class="h-6 w-6 rounded-full"
                          src="/assets/docs/master/image-01.jpg"
                        />
                      </td>
                      <td class="px-4 py-4">tmgbedu@gmail.com</td>
                      <td class="px-4 py-4">
                        <span class="text-sm bg-red-500 text-white rounded-full px-2 py-1">
                          Not Active
                        </span>
                      </td>
                      <td class="text-center py-4">
                        <a href="#">
                          <span class="fill-current text-green-500 material-icons">
                            edit
                          </span>
                        </a>
                        <a href="#">
                          <span class="fill-current text-red-500 material-icons">
                            highlight_off
                          </span>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* -------------------Example Table End--------------------- */}
          </div>
          {/*/Main*/}
        </div>
        {/*Footer*/}
        <footer className="bg-gray-900  text-white p-2">
          <div className="flex items-end justify-end mx-auto text-center w-full">
            © InfoCare
          </div>
        </footer>
        {/*/footer*/}
      </div>
    </div>
  );
};
export default InitialScreen;
