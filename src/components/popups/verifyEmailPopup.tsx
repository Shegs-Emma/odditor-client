"use client";

import Image from "next/image";
import React, { FC, useState, useTransition } from "react";

interface VerifyProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const VerifyEmailPopup: FC<VerifyProps> = () => {
  const [otpInput, setOtpInput] = useState(new Array(5).fill(""));
  const [isPending, startTransition] = useTransition();

  return (
    <div className="mt-4 w-full bg-white rounded-md flex flex-col">
      <div className="w-full flex flex-col items-center justify-center m-[auto]">
        <Image
          src="/assets/verify_email.svg"
          alt="avatar_img"
          width={200}
          height={200}
        />

        <div className="flex flex-col mt-4 text-center">
          <h2 className="font-bold text-3xl text-[#000000]">
            Verify Your Account
          </h2>
          <p className="font-normal text-base my-3">
            An OTP has been sent to your email or phone. Please enter it below
            to verify your account.
          </p>

          <div className="flex flex-col w-full mt-4">
            <div className="relative flex justify-center space-x-4 rounded-md">
              {otpInput &&
                otpInput.length &&
                otpInput?.map((data, index) => {
                  return (
                    <input
                      type="text"
                      maxLength={1}
                      className="mb-4 block h-15 w-15 items-center justify-center rounded-md bg-white text-center text-[12px] border-[2px] border-[#bd0a0a] text-[#4f4f4f] focus:border-olivine-500 focus:ring-olivine-500  sm:text-lg"
                      name="opt"
                      key={index}
                      value={data}
                      // onChange={(e) => handleOtpInputChange(e.target, index)}
                      // onPaste={handlePaste}
                      onFocus={(e) => e.target.select()}
                    />
                  );
                })}
            </div>
          </div>

          <p
            // onClick={() => router.push("/login")}
            className="font-montserrat text-base font-semibold text-[#4f4f4f] cursor-pointer"
          >
            Didn’t receive the OTP?{" "}
            <span
              // onClick={() => router.push("/login")}
              className="text-[#bd0a0a] underline"
            >
              Resend OTP
            </span>
          </p>

          <div className="flex flex-col justify-center items-center mb-4">
            {isPending ? (
              <div className="flex flex-col w-full p-3 cursor-pointer items-center font-semibold text-[#ffffff] text-sm rounded mt-8 bg-[#bd0a0a] mb-4 cursor-pointer">
                loading....
              </div>
            ) : (
              <div
                //   onClick={() => handleSubmit()}
                className="flex flex-col w-full p-3 text-[#ffffff] cursor-pointer items-center font-semibold text-sm rounded mt-8 bg-[#bd0a0a] mb-4 cursor-pointer"
              >
                Verify
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailPopup;
