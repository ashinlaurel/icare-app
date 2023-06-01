import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../context/SidebarContext";
import {
  SearchIcon,
  MoonIcon,
  SunIcon,
  BellIcon,
  MenuIcon,
  OutlinePersonIcon,
  OutlineCogIcon,
  OutlineLogoutIcon,
} from "../icons";
import {
  Avatar,
  Badge,
  Input,
  Dropdown,
  DropdownItem,
  WindmillContext,
} from "@windmill/react-ui";
import theavatar from "../icons/avatardefault.png";
import { useHistory } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { API } from "../../src/backendapi";

import Emp from "../helpers/auth/EmpProfile";
import Cust from "../helpers/auth/CustProfile";
import PageTitle from "./Typography/PageTitle";
import { TopBarContext } from "../context/TopBarContext";

function Header() {
  const history = useHistory();
  const { mode, toggleMode } = useContext(WindmillContext);
  const { toggleSidebar } = useContext(SidebarContext);
  const { topheading } = useContext(TopBarContext);

  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const [isNotifications, setIsNotifications] = useState(false);
  //leave
  const [leavecount, setleavecount] = useState(0);

  useEffect(() => {
    // Using an IIFE
    (async function thegetter() {
      // console.log(`${API}/asset/${Emp.getId()}/getall`);
      if (Emp.getRole() !== 0) return;
      try {
        let response = await axios({
          url: `${API}/leave/${Emp.getId()}/countsubmitted`,
          method: "POST",
          data: {},
        });
        console.log("LEAVE COUNT", response.data);
        if (response.data > 0) {
          setIsNotifications(true);
          setleavecount(response.data);
        }
      } catch (error) {
        throw error;
      }
    })();
    // setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, []);

  function handleNotificationsClick() {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
  }

  function handleProfileClick() {
    setIsProfileMenuOpen((prevState) => {
      return !prevState;
    });
  }

  return (
    <header className="z-40 py-4 bg-white shadow-bottom dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        {/* <!-- Mobile hamburger --> */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          <MenuIcon className="w-6 h-6" aria-hidden="true" />
        </button>
        {/* <!-- Search input --> */}
        <div className="flex justify-start flex-1 lg:mr-32">
          <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            {topheading}
          </h1>
          {/* <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <SearchIcon className="w-4 h-4" aria-hidden="true" />
            </div>
            <Input
              className="pl-8 text-gray-700"
              placeholder="Search for projects"
              aria-label="Search"
            />
          </div> */}
        </div>
        <ul className="flex items-center flex-shrink-0 space-x-6">
          {/* <!-- Theme toggler --> */}
          <li className="flex">
            <button
              className="rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={toggleMode}
              aria-label="Toggle color mode"
            >
              {mode === "dark" ? (
                <SunIcon className="w-5 h-5" aria-hidden="true" />
              ) : (
                <MoonIcon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </li>
          {/* <!-- Notifications menu --> */}
          <li className="relative">
            <button
              className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={handleNotificationsClick}
              aria-label="Notifications"
              aria-haspopup="true"
            >
              <BellIcon className="w-5 h-5" aria-hidden="true" />
              {/* <!-- Notification badge --> */}
              {isNotifications ? (
                <span
                  aria-hidden="true"
                  className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
                ></span>
              ) : null}
            </button>

            <Dropdown
              align="right"
              isOpen={isNotificationsMenuOpen}
              onClose={() => setIsNotificationsMenuOpen(false)}
            >
              {Emp.getRole() == 0 || Emp.getRole() == 15 ? (
                <DropdownItem tag="a" href="#" className="justify-between">
                  <Link to="/app/leavehistory">
                    <span>Approve Leave</span>
                    {leavecount > 0 ? (
                      <Badge type="danger">{leavecount}</Badge>
                    ) : null}
                  </Link>
                </DropdownItem>
              ) : null}
              {/* <DropdownItem tag="a" href="#" className="justify-between">
                <span>Sales</span>
                <Badge type="danger">2</Badge>
              </DropdownItem>
              <DropdownItem onClick={() => alert("Alerts!")}>
                <span>Alerts</span>
              </DropdownItem> */}
            </Dropdown>
          </li>
          {/* <!-- Profile menu --> */}
          <li className="relative">
            <button
              className="rounded-full focus:shadow-outline-purple focus:outline-none"
              onClick={handleProfileClick}
              aria-label="Account"
              aria-haspopup="true"
              key={isProfileMenuOpen.toString()}
            >
              <Avatar
                className="align-middle"
                src={theavatar}
                alt=""
                aria-hidden="true"
              />
            </button>
            <Dropdown
              align="right"
              isOpen={isProfileMenuOpen}
              onBlur={() => {
                setIsProfileMenuOpen(false);
              }}
              onClose={() => {
                // setIsProfileMenuOpen(false);
              }}
            >
              <DropdownItem
                tag="a"
                href="#"
                onClick={() =>
                  localStorage.getItem("type") == "0"
                    ? history.push("/app/empprofile")
                    : history.push("/app/custprofile")
                }
              >
                <OutlinePersonIcon
                  className="w-4 h-4 mr-3"
                  aria-hidden="true"
                />
                <span>Profile</span>
              </DropdownItem>
              <DropdownItem
                tag="a"
                href="#"
                onClick={() => {
                  history.push("/app/settings");
                }}
              >
                <OutlineCogIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                <span>Settings</span>
              </DropdownItem>
              <a href="/" className="">
                <DropdownItem
                  onClick={() =>
                    localStorage.getItem("type") == "0"
                      ? Emp.signout()
                      : Cust.signout()
                  }
                >
                  <OutlineLogoutIcon
                    className="w-4 h-4 mr-3"
                    aria-hidden="true"
                  />
                  <span>Sign out</span>
                </DropdownItem>
              </a>
            </Dropdown>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
