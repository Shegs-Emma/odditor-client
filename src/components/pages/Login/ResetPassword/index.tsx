"use client";

import React, { useState } from "react";
import Welcome from "@/components/reusables/welcome";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { twMerge } from "tailwind-merge";
import PasswordChecklist from "react-password-checklist";
// import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

const ResetPassword = () => {
  // const router = useRouter();
  // const [isPending, startTransition] = useTransition();
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [visibilityConfirm, setVisibilityConfirm] = useState(false);
  // const [formValues, setFormValues] = useState({
  //   password: "",
  // });
  // const [errorFields, setErrorFields] = useState({
  //   password: false,
  // });

  const InputType = visibility ? "text" : "password";
  const InputTypeConfirm = visibilityConfirm ? "text" : "password";

  const viewer = () => {
    setVisibility(!visibility);
  };

  const viewerConfirm = () => {
    setVisibilityConfirm(!visibilityConfirm);
  };

  // Handle change code ========================================================================================================================
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;

  //   setFormValues({
  //     ...formValues,
  //     [name]: value,
  //   });

  //   if (value.trim() !== "") {
  //     setErrorFields({
  //       ...errorFields,
  //       [name]: false,
  //     });
  //   }
  // };

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
        <div className="flex flex-col mt-[10rem] mb-8">
          <h2 className="font-semibold text-3xl text-[#bd0a0a]">
            Change your password
          </h2>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full mt-1">
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

            <div className="flex flex-col w-full mt-6">
              <label
                className=" font-bold text-base mb-2"
                htmlFor="Confirm Password"
              >
                Confirm Password
              </label>

              <Box
                component="form"
                sx={{
                  "& > :not(style)": { width: "100%", border: "none" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Confirm Password"
                  variant="outlined"
                  size="small"
                  color="success"
                  value={confirmPwd}
                  type={InputTypeConfirm}
                  onChange={(e) => {
                    const limit = 30;

                    // 👇️ only take first N characters
                    setConfirmPwd(e.target.value.slice(0, limit));
                  }}
                  className={twMerge(
                    "placeholder:text-[#363435] placeholder:text-sm rounded-lg border-[0.6px] border-[#bdbdbd] w-[80%] text-[#000000]"
                  )}
                />
              </Box>
              <button
                type="button"
                onClick={viewerConfirm}
                className="transform -translate-y-1/2 mt-[3.3rem] mx-2 absolute right-[2.5rem]"
              >
                {visibilityConfirm ? (
                  <EyeOff color="#4b5563" size={20} />
                ) : (
                  <Eye color="#4b5563" size={20} />
                )}
              </button>
            </div>

            {pwd ? (
              <div className="px-2 pt-1">
                <PasswordChecklist
                  className="text-[11px] text-[#363435] font-semibold checked:h-2"
                  rules={[
                    "minLength",
                    "specialChar",
                    "number",
                    "capital",
                    "match",
                  ]}
                  minLength={8}
                  value={pwd}
                  valueAgain={confirmPwd}
                  // onChange={(isValid) => {
                  //   isValid ? setPaswordValid(true) : setPaswordValid(false);
                  // }}
                  messages={{
                    minLength: "The password has more than 8 characters.",
                    specialChar: "The password has special characters.",
                    number: "The password has a number.",
                    capital: "The password has an uppercase letter.",
                    match: "The passwords match.",
                  }}
                  iconSize={10}
                  validColor={"#8DAA6A"}
                />
              </div>
            ) : (
              ""
            )}

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
                Change password
              </div>
              {/* )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
