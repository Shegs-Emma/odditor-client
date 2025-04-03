"use client";

import React, { useState } from "react";
import Welcome from "@/components/reusables/welcome";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const router = useRouter();
  // const [isPending, startTransition] = useTransition();
  const [formValues, setFormValues] = useState({
    email: "",
  });
  const [errorFields, setErrorFields] = useState({
    email: false,
  });

  // Handle change code ========================================================================================================================
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });

    if (value.trim() !== "") {
      setErrorFields({
        ...errorFields,
        [name]: false,
      });
    }
  };

  const handleSubmit = () => {
    // try {
    //   // if (!passwordValid) return;
    //   if (pwd !== confirmPwd) return;
    //   const toastId = toast.loading("Creating account");
    //   const payload = {
    //     ...formValues,
    //     password: pwd,
    //   };
    //   startTransition(async () => {
    //     try {
    //       await register(payload, router);
    //       toast.success("Created successfully", { id: toastId });
    //     } catch (err) {
    //       console.error("Error in:", err);
    //       toast.error("Created failed", { id: toastId });
    //     }
    //   });
    // } catch (err) {
    //   return err;
    // }
  };

  return (
    <div className="w-full flex">
      <Welcome />
      <div className="w-[55%] flex flex-col px-8">
        <div className="flex flex-col mt-[5rem] mb-8">
          <h2 className="font-semibold text-3xl text-[#bd0a0a]">
            {/* Can't log in? */}
            {"Can't log in?"}
          </h2>
          <p className="text-xl font-medium text-[#656565] w-[87%] mt-4">
            {
              "Enter the email address you used when you created your ODDITOR account, and we'll send you instructions to reset your password."
            }
          </p>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full mt-8">
            <div className="flex flex-col w-full">
              <label
                className="font-bold text-base mb-2"
                htmlFor="Email Address"
              >
                Email Address
              </label>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": {
                    width: "100%",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Email Address"
                  variant="outlined"
                  color="success"
                  size="small"
                  name="first_name"
                  onChange={handleChange}
                  className={twMerge(
                    "placeholder:text-[#363435] placeholder:text-sm font-montserrat rounded-lg border-[0.6px] border-[#bdbdbd] w-[80%] text-[#363435]"
                  )}
                />
              </Box>
            </div>

            <div className="flex flex-col justify-center items-center mb-4">
              {/* {isPending ? (
                <div className="flex flex-col w-full p-3 cursor-pointer items-center font-semibold text-[#ffffff] text-sm rounded mt-8 bg-[#bd0a0a] mb-4 cursor-pointer">
                  loading....
                </div>
              ) : ( */}
              <div
                onClick={() => handleSubmit()}
                className="flex flex-col w-full p-3 text-[#ffffff] cursor-pointer items-center font-semibold text-sm rounded mt-8 bg-[#bd0a0a] mb-4 cursor-pointer"
              >
                Send recovery link
              </div>
              {/* )} */}
            </div>

            <hr className="w-full text-[#828282] relative mb-4" />

            <div className="flex justify-between">
              <p
                onClick={() => router.push("/login")}
                className="text-[#bd0a0a] text-base font-normal cursor-pointer"
              >
                Already have a ODDITOR account? Log in
              </p>
            </div>
          </div>
        </div>

        <div
          className="mt-6 p-2 rounded-sm"
          style={{ backgroundColor: "rgba(189, 10, 10, 0.4)" }}
        >
          <p className="text-lg">
            If your email address is known to us, the reset password link has
            just been sent to example@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
