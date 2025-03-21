import Image from "next/image";
import React, { FC } from "react";

interface Props {
  title: string;
}

const Oauth: FC<Props> = ({ title }) => {
  return (
    <div className="flex flex-col mt-[2rem] w-full">
      <h2 className="font-semibold text-3xl text-[#000000] text-center">
        {title}
      </h2>
      <div className="flex flex-col mt-6">
        <div
          className="w-full flex justify-center p-1 mb-2"
          style={{ backgroundColor: "rgba(136, 197, 255, 0.4)" }}
        >
          <Image
            src="/assets/google.svg"
            alt="avatar_img"
            width={25}
            height={25}
          />
          <p className=" font-normal text-lg ml-2 mt-1">Continue with Google</p>
        </div>
        <div
          className="w-full flex justify-center p-1 mb-2"
          style={{ backgroundColor: "rgba(136, 197, 255, 0.4)" }}
        >
          <Image
            src="/assets/facebook.svg"
            alt="avatar_img"
            width={25}
            height={25}
          />
          <p className="font-normal text-lg ml-2 mt-1">
            Continue with Facebook
          </p>
        </div>
        <div
          className="w-full flex justify-center p-1 mb-2"
          style={{ backgroundColor: "rgba(136, 197, 255, 0.4)" }}
        >
          <Image
            src="/assets/apple.svg"
            alt="avatar_img"
            width={25}
            height={25}
          />
          <p className="font-normal text-lg ml-2 mt-1">Continue with Apple</p>
        </div>
      </div>
    </div>
  );
};

export default Oauth;
