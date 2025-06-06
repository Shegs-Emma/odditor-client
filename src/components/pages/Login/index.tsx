"use client";

import React, { useState } from "react";
import Oauth from "@/components/reusables/oauth";
import Welcome from "@/components/reusables/welcome";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { twMerge } from "tailwind-merge";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Login = () => {
  const router = useRouter();
  // const [isPending, startTransition] = useTransition();
  // const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [pwd, setPwd] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [errorFields, setErrorFields] = useState({
    email: false,
    password: false,
  });

  const InputType = visibility ? "text" : "password";

  const viewer = () => {
    setVisibility(!visibility);
  };

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
      <div className="w-full md:w-[55%] flex flex-col px-8">
        <div className="flex flex-col w-full items-center justify-center block md:hidden mt-12">
          <Image
            src="/assets/empty_logo.svg"
            alt="avatar_img"
            width={80}
            height={80}
          />
          <h1 className="font-medium text-2xl text-[#000000] my-4">
            Welcome to The Odditor
          </h1>
          <p className="text-xs font-normal italic text-[#000000] text-center mb-4">
            Log in to access your dashboard, where you can manage your services,
            schedule appointments, or view fair price estimates. Enter your
            details below to get started.
          </p>
        </div>
        <Oauth title="Log in to Your Account" />

        <div className="flex w-full justify-between mt-4">
          <hr className="w-[47%] text-[#828282] top-[11px] relative" />
          <p className=" text-base font-medium text-[#828282]">OR</p>
          <hr className="w-[47%] text-[#828282] top-[11px] relative" />
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

            <div className="flex flex-col w-full mt-3">
              <label className="font-bold text-base mb-2" htmlFor="Password">
                Password
              </label>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  size="small"
                  color="success"
                  type={InputType}
                  value={pwd}
                  onChange={(e) => {
                    const limit = 30;

                    // 👇️ only take first N characters
                    setPwd(e.target.value.slice(0, limit));
                  }}
                  className={twMerge(
                    "placeholder:text-[#363435] placeholder:text-sm rounded-lg border-[0.6px] border-[#bdbdbd] w-[80%] text-[#363435]"
                  )}
                />
              </Box>
              <button
                type="button"
                onClick={viewer}
                className="transform -translate-y-1/2 mt-[3.3rem] mx-2 absolute right-[2.5rem]"
              >
                {visibility ? (
                  <EyeOff color="#4b5563" size={20} />
                ) : (
                  <Eye color="#4b5563" size={20} />
                )}
              </button>
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
                Login
              </div>
              {/* )} */}
            </div>

            <hr className="w-full text-[#828282] relative mb-4" />

            <div className="flex justify-between">
              <p className="text-[#bd0a0a] text-base font-normal">
                {"Can't log in?"}
              </p>

              <p
                onClick={() => router.push("/signup")}
                className="text-[#bd0a0a] text-base font-normal cursor-pointer"
              >
                Sign up for an account
              </p>
            </div>
          </div>
          <div className="flex w-full justify-between px-4 mb-6 mt-12 block md:hidden">
            <p className="underline text-sm text-[#1877F2]">Terms of use</p>
            <p className="underline text-sm text-[#1877F2]">Privacy Policy</p>
            <p className="underline text-sm text-[#1877F2]">Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
