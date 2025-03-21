import Image from "next/image";
import React from "react";

const Welcome = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center w-[45%]"
      style={{ backgroundImage: "url('/assets/home_image.svg')" }}
    >
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      >
        <div className="flex flex-col w-[90%] items-center justify-center">
          <Image
            src="/assets/empty_logo.svg"
            alt="avatar_img"
            width={116}
            height={116}
          />
          <h1 className="font-medium text-4xl text-[#ffffff] my-4">
            Welcome to The Odditor
          </h1>
          <p className="text-base font-normal italic text-[#ffffff] text-center mt-8 mb-4">
            Log in to access your dashboard, where you can manage your services,
            schedule appointments, or view fair price estimates. Enter your
            details below to get started.
          </p>
          <div className="flex flex-col mt-8 items-center justify-center">
            <p className=" font-normal text-base cursor-pointer text-[#ffffff] underline mb-2">
              Terms of use
            </p>
            <p className="font-normal text-base cursor-pointer text-[#ffffff] underline mb-2">
              Privacy policy
            </p>
            <p className="font-normal text-base cursor-pointer text-[#ffffff] underline mb-2">
              Contact
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
