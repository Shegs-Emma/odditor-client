"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

interface sidebarProps {
  viewing: (isViewing: string) => void;
}

const AuthNavbarMobileAdmin: FC<sidebarProps> = ({ viewing }) => {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [isViewing, setIsViewing] = useState<string>("dashboard");
  //   const [isViewingInner, setIsViewingInner] = useState<string>("dashboard");

  const [isViewingPM, setIsViewingPM] = useState<boolean>(false);

  const handleIsViewing = (currentlyViewing: string) => {
    console.log("currentlyViewing mobile", currentlyViewing);
    setIsViewing(currentlyViewing);
    viewing(currentlyViewing);

    if (
      currentlyViewing === "Painter Management" ||
      currentlyViewing === "all" ||
      currentlyViewing === "pending" ||
      currentlyViewing === "active" ||
      currentlyViewing === "inactive"
    ) {
      setIsViewingPM(true);
    } else {
      setIsViewingPM(false);
    }
    // setIsShowing(false);
  };

  //   const handleIsViewingInner = (currentlyViewing: string) => {
  //     setIsViewingInner(currentlyViewing);
  //   };

  //   console.log("isViewingInner", isViewingInner);

  return (
    <div className="w-full flex md:hidden h-[70px] shadow-md pt-4 bg-[#BD0A0A] p-4">
      <div className="flex w-full justify-between">
        <div className="flex md:hidden">
          <FaBars
            className="flex items-center justify-center mt-1"
            color="#ffffff"
            size={25}
            onClick={() => setIsShowing(!isShowing)}
          />
        </div>

        <div className="flex justify-between w-[12rem] ml-auto">
          <Image
            src="/assets/lang_mini.svg"
            alt="lang"
            width={34}
            height={34}
          />
          <Image
            src="/assets/search_mini.svg"
            alt="search"
            width={34}
            height={34}
          />
          <Image
            src="/assets/notification_mini.svg"
            alt="notification"
            width={34}
            height={34}
          />
          <Image src="/assets/pp.svg" alt="avatar" width={34} height={34} />
        </div>
      </div>

      {isShowing && (
        <div className="fixed top-0 left-0 z-50 w-[75%] h-screen bg-[#BD0A0A] flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-white flex justify-between items-center">
            <RxCross1
              onClick={() => setIsShowing(false)}
              color="#ffffff"
              size={25}
              className="cursor-pointer"
            />
            <div className="flex items-center gap-4">
              <Image
                src="/assets/empty_logo.svg"
                alt="logo"
                width={34}
                height={34}
              />
              <p className="text-lg text-white font-semibold">ODDITOR</p>
            </div>
          </div>

          <div className="flex flex-col h-screen justify-between">
            {/* Navigation */}
            <div className="flex flex-col py-4 pr-1 gap-2">
              {[
                { id: "overview", icon: "overview", url: "overview" },
                { id: "inbox", icon: "inbox", url: "inbox" },
                {
                  id: "Painter Management",
                  icon: "painter_management",
                  url: "all",
                },
                {
                  id: "User Management",
                  icon: "profile",
                  url: "user_management",
                },
                { id: "Settings", icon: "settings", url: "settings" },
              ].map(({ id, icon, url }) => {
                const isActive = isViewing === url;
                return (
                  <div key={id} className="flex flex-col">
                    <div
                      onClick={() => handleIsViewing(url)}
                      className={`flex items-center p-4 rounded cursor-pointer ${
                        isActive ? "bg-white" : ""
                      }`}
                    >
                      <Image
                        src={`/assets/${icon}${isActive ? "" : "_white"}.svg`}
                        alt={`${id}_icon`}
                        width={30}
                        height={30}
                      />
                      <p
                        className={`ml-4 text-base font-normal ${
                          isActive ? "text-[#BD0A0A]" : "text-white"
                        }`}
                      >
                        {id.charAt(0).toUpperCase() + id.slice(1)}
                      </p>
                    </div>

                    {isViewingPM && id === "Painter Management" && (
                      <div className="flex flex-col mb-2">
                        <p
                          onClick={() => handleIsViewing("all")}
                          className={`pl-[5rem] font-normal text-sm py-1 cursor-pointer ${
                            isViewing === "all"
                              ? "bg-[#ffffff] text-[#BD0A0A]"
                              : "text-[#ffffff]"
                          }`}
                        >
                          All Painters
                        </p>
                        <p
                          onClick={() => handleIsViewing("pending")}
                          className={`pl-[5rem] font-normal text-sm py-1 cursor-pointer ${
                            isViewing === "pending"
                              ? "bg-[#ffffff] text-[#BD0A0A]"
                              : "text-[#ffffff]"
                          }`}
                        >
                          Pending Verification
                        </p>
                        <p
                          onClick={() => handleIsViewing("active")}
                          className={`pl-[5rem] font-normal text-sm py-1 cursor-pointer ${
                            isViewing === "active"
                              ? "bg-[#ffffff] text-[#BD0A0A]"
                              : "text-[#ffffff]"
                          }`}
                        >
                          Active Painters
                        </p>
                        <p
                          onClick={() => handleIsViewing("inactive")}
                          className={`pl-[5rem] font-normal text-sm py-1 cursor-pointer ${
                            isViewing === "inactive"
                              ? "bg-[#ffffff] text-[#BD0A0A]"
                              : "text-[#ffffff]"
                          }`}
                        >
                          Inactive Painters
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="px-4 py-6">
              <p className="font-bold text-sm text-white">Terms of Services</p>
              <p className="font-bold text-sm text-white my-2">
                Privacy Policy
              </p>
              <p className="font-normal text-sm text-[#D4D4D4] mt-4">
                Copyright (C) 2024 odditor
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthNavbarMobileAdmin;
