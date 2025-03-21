"use client";

import React, { useState, useTransition } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PasswordChecklist from "react-password-checklist";
// import { toast } from "sonner";
import { twMerge } from "tailwind-merge";
import { Eye, EyeOff } from "lucide-react";
import Welcome from "@/components/reusables/welcome";
import Oauth from "@/components/reusables/oauth";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [visibilityConfirm, setVisibilityConfirm] = useState(false);
  const [formValues, setFormValues] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone_number: "",
  });
  const [errorFields, setErrorFields] = useState({
    username: false,
    first_name: false,
    last_name: false,
    email: false,
    password: false,
    phone_number: false,
  });

  const InputType = visibility ? "text" : "password";
  const InputTypeConfirm = visibilityConfirm ? "text" : "password";

  const viewer = () => {
    setVisibility(!visibility);
  };

  const viewerConfirm = () => {
    setVisibilityConfirm(!visibilityConfirm);
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
      <div className="w-[55%] flex flex-col px-8">
        <Oauth title="Signup" />

        <div className="flex w-full justify-between mt-4">
          <hr className="w-[47%] text-[#828282] top-[11px] relative" />
          <p className=" text-base font-medium text-[#828282]">OR</p>
          <hr className="w-[47%] text-[#828282] top-[11px] relative" />
        </div>

        <div className="flex flex-col w-full">
          <h2 className="font-bold text-xl text-[#000000] my-4">
            Account Type
          </h2>

          <div>
            <div className="flex">
              <label className="flex items-center space-x-2 mr-4">
                <input
                  type="radio"
                  name="option"
                  value="user"
                  className="w-4 h-4 text-[#bd0a0a] border-[#bd0a0a]focus:ring-[#bd0a0a]"
                />
                <span className="text-[#000000] ">User</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="option"
                  value="painter"
                  className="w-4 h-4 text-[#bd0a0a] border-gray-300 focus:ring-[#bd0a0a]"
                />
                <span className="text-[#000000] ">Painter</span>
              </label>
            </div>

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

              <div className="flex w-full mt-3 justify-between">
                <div className="w-[47%]">
                  <label className="font-bold text-base mb-2" htmlFor="Name">
                    Name
                  </label>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": {
                        width: "100%",
                        marginTop: "5px",
                      },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="First Name"
                      variant="outlined"
                      color="success"
                      size="small"
                      name="name"
                      onChange={handleChange}
                      className={twMerge(
                        "placeholder:text-[#363435] placeholder:text-sm font-montserrat rounded-lg border-[0.6px] border-[#bdbdbd] w-[80%] text-[#363435]"
                      )}
                    />
                  </Box>
                </div>
                <div className="w-[47%] mt-6">
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": {
                        width: "100%",
                        marginTop: "5px",
                      },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="Last Name"
                      variant="outlined"
                      color="success"
                      size="small"
                      name="name"
                      onChange={handleChange}
                      className={twMerge(
                        "placeholder:text-[#363435] placeholder:text-sm font-montserrat rounded-lg border-[0.6px] border-[#bdbdbd] w-[80%] text-[#363435]"
                      )}
                    />
                  </Box>
                </div>
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
                <div className="w-full flex">
                  <p className=" font-bold text-sm text-[#4f4f4f] mt-2">
                    By continuing, you agree to our 
                    <span className="underline text-[#bd0a0a]">
                      Terms of Use
                    </span>
                     and have read our 
                    <span className="underline text-[#bd0a0a]">
                      Privacy Policy.
                    </span>
                  </p>
                </div>
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

              <div className="flex flex-col justify-center items-center mb-8">
                {isPending ? (
                  <div className="flex flex-col w-full p-3 cursor-pointer items-center font-semibold text-[#ffffff] text-sm rounded mt-8 bg-[#bd0a0a] mb-4 cursor-pointer">
                    loading....
                  </div>
                ) : (
                  <div
                    onClick={() => handleSubmit()}
                    className="flex flex-col w-full p-3 text-[#ffffff] cursor-pointer items-center font-semibold text-sm rounded mt-8 bg-[#bd0a0a] mb-4 cursor-pointer"
                  >
                    Sign up
                  </div>
                )}

                <p
                  // onClick={() => router.push("/login")}
                  className="font-montserrat text-base font-semibold text-[#4f4f4f] cursor-pointer"
                >
                  Already have a ODDITOR account?{" "}
                  <span
                    onClick={() => router.push("/login")}
                    className="text-[#bd0a0a] underline"
                  >
                    Sign in
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
