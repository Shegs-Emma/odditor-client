"use client";

import React, { useState } from "react";
import { FaStarOfLife, FaCalendarAlt } from "react-icons/fa";
import { SlCloudUpload } from "react-icons/sl";
import { BiSolidDownArrow } from "react-icons/bi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddCardPopup from "./AddCardPopup";

const Service = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isUrgencyOpen, setIsUrgencyOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [isPaymentOpen, setIsPaymentOpen] = useState<boolean>(false);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState("");

  const toggleUrgencyDropdown = () => setIsUrgencyOpen(!isUrgencyOpen);
  const togglePaymentDropdown = () => setIsPaymentOpen(!isPaymentOpen);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsUrgencyOpen(false);
  };

  const handlePaymentSelect = (option: string) => {
    setSelectedPaymentOption(option);
    setIsPaymentOpen(false);
  };

  return (
    <div className="flex w-[97%] mx-auto rounded-xs shadow-md mt-4">
      <div className="flex flex-col w-full p-4">
        <div className="flex w-[450px] h-[40px] border-[1px] border-[#BD0A0A] mx-auto rounded-[88px] justify-between">
          <div className="w-[50%] bg-[#BD0A0A] rounded-[88px] flex justify-center items-center text-[#ffffff] cursor-pointer">
            Single Booking
          </div>
          <div className="w-[50%] flex justify-center items-center text-[#BD0A0A] cursor-pointer">
            Bulk Booking
          </div>
        </div>

        <div className="flex flex-col mt-8">
          {/* Car Details */}
          <div className="flex flex-col">
            <p className="font-bold text-lg">Car Details:</p>
            <div className="flex mt-4">
              <div className="flex flex-col mr-4">
                <div className="flex flex-col mb-4">
                  <div className="flex mb-2">
                    <p className="font-semibold text-sm text-[#2D3373]">
                      Car Name
                    </p>
                    <FaStarOfLife
                      color="#FF2828"
                      className="w-[5px] h-[5px] mt-1"
                    />
                  </div>

                  <div className="flex items-center border-[#eeeeee] bg-[#D9EAFF] border-[1px] rounded-[9px] px-3 py-2 shadow-sm w-[320px] h-[29px]">
                    <input
                      type="text"
                      placeholder="Enter here"
                      className="outline-none w-full text-[13px]"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex mb-2">
                    <p className="font-semibold text-sm text-[#2D3373]">
                      Color
                    </p>
                    <FaStarOfLife
                      color="#FF2828"
                      className="w-[5px] h-[5px] mt-1"
                    />
                  </div>

                  <div className="flex items-center border-[#eeeeee] bg-[#D9EAFF] border-[1px] rounded-[9px] px-3 py-2 shadow-sm w-[320px] h-[29px]">
                    <input
                      type="text"
                      placeholder="eg blue"
                      className="outline-none w-full text-[13px]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col mr-4">
                <div className="flex flex-col mb-4">
                  <div className="flex mb-2">
                    <p className="font-semibold text-sm text-[#2D3373]">
                      Model
                    </p>
                    <FaStarOfLife
                      color="#FF2828"
                      className="w-[5px] h-[5px] mt-1"
                    />
                  </div>

                  <div className="flex items-center border-[#eeeeee] bg-[#D9EAFF] border-[1px] rounded-[9px] px-3 py-2 shadow-sm w-[320px] h-[29px]">
                    <input
                      type="text"
                      placeholder="eg Luxury Edition"
                      className="outline-none w-full text-[13px]"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex mb-2">
                    <p className="font-semibold text-sm text-[#2D3373]">Year</p>
                    <FaStarOfLife
                      color="#FF2828"
                      className="w-[5px] h-[5px] mt-1"
                    />
                  </div>

                  <div className="flex items-center border-[#eeeeee] bg-[#D9EAFF] border-[1px] rounded-[9px] px-3 py-2 shadow-sm w-[320px] h-[29px]">
                    <input
                      type="text"
                      placeholder="eg 2020"
                      className="outline-none w-full text-[13px]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col mr-4">
                <div className="flex flex-col mb-4">
                  <div className="flex mb-2">
                    <p className="font-semibold text-sm text-[#2D3373]">
                      Number of Cars
                    </p>
                    <FaStarOfLife
                      color="#FF2828"
                      className="w-[5px] h-[5px] mt-1"
                    />
                  </div>

                  <div className="flex items-center border-[#eeeeee] bg-[#D9EAFF] border-[1px] rounded-[9px] px-3 py-2 shadow-sm w-[320px] h-[29px]">
                    <input
                      type="text"
                      placeholder="Enter here"
                      className="outline-none w-full text-[13px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location and Availability */}
          <div className="flex">
            <div className="flex flex-col mt-4">
              <p className="font-bold text-lg">Location:</p>
              <div className="flex mt-4">
                <div className="flex flex-col mr-4">
                  <div className="flex flex-col mb-4">
                    <div className="flex mb-2">
                      <p className="font-semibold text-sm text-[#2D3373]">
                        State/Region
                      </p>
                      <FaStarOfLife
                        color="#FF2828"
                        className="w-[5px] h-[5px] mt-1"
                      />
                    </div>

                    <div className="flex items-center border-[#eeeeee] bg-[#D9EAFF] border-[1px] rounded-[9px] px-3 py-2 shadow-sm w-[320px] h-[29px]">
                      <input
                        type="text"
                        placeholder="Enter here"
                        className="outline-none w-full text-[13px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-4">
              <p className="font-bold text-lg">Booking Availability:</p>
              <div className="flex mt-4">
                <div className="flex flex-col mr-4">
                  <div className="flex flex-col mb-4">
                    <div className="flex mb-2">
                      <p className="font-semibold text-sm text-[#2D3373]">
                        Calendar picker
                      </p>
                      <FaStarOfLife
                        color="#FF2828"
                        className="w-[5px] h-[5px] mt-1"
                      />
                    </div>

                    <div className="relative w-full max-w-xs">
                      <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="yyyy-MM-dd"
                        className="w-[320px] h-[29px] border border-gray-300 rounded-[9px] px-4 py-2 pr-10 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-[#D9EAFF] shadow-sm"
                      />
                      <FaCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Urgency and Payment */}
          <div className="flex w-[70%]">
            <div className="flex flex-col mt-4 w-[48%]">
              <p className="font-bold text-lg">Urgency Level:</p>
              <div className="flex mt-4 w-[100%]">
                <div className="flex flex-col mr-4 w-[45%]">
                  <div className="flex flex-col mb-4">
                    <div className="flex mb-2">
                      <p className="font-semibold text-sm text-[#2D3373]">
                        Urgency scale
                      </p>
                      <FaStarOfLife
                        color="#FF2828"
                        className="w-[5px] h-[5px] mt-1"
                      />
                    </div>

                    <div className="flex relative max-w-xs items-center border-[#eeeeee] bg-[#D9EAFF] border-[1px] rounded-[9px] py-2 shadow-sm w-[100%] h-[29px]">
                      <div
                        onClick={toggleUrgencyDropdown}
                        className="w-[100%] border border-gray-300 text-xs rounded-lg px-1  h-[29px] flex items-center justify-between cursor-pointer focus:ring-2 focus:ring-blue-500"
                      >
                        <span
                          className={
                            selectedOption ? "text-gray-900" : "text-gray-400"
                          }
                        >
                          {selectedOption || "Select an option"}
                        </span>
                        <BiSolidDownArrow className="text-gray-500" />
                      </div>

                      {/* Dropdown Menu */}
                      {isUrgencyOpen && (
                        <div className="absolute left-0 mt-[-9rem] bg-white border text-xs border-gray-200 rounded-lg shadow-lg z-10">
                          <ul className="py-2">
                            {["1 - 10", "11 - 20", "21 - 30"].map((option) => (
                              <li
                                key={option}
                                onClick={() => handleSelect(option)}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              >
                                {option}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-[45%] mr-4">
                  <div className="flex flex-col mb-4">
                    <div className="flex mb-2">
                      <p className="font-semibold text-sm text-[#2D3373]">
                        Amount
                      </p>
                      <FaStarOfLife
                        color="#FF2828"
                        className="w-[5px] h-[5px] mt-1"
                      />
                    </div>

                    <div className="flex items-center border-[#eeeeee] bg-[#D9EAFF] border-[1px] rounded-[9px] px-3 py-2 shadow-sm w-[100%] h-[29px]">
                      <input
                        type="text"
                        placeholder="N1000.00"
                        className="outline-none w-full text-[13px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-4  w-[50%]">
              <p className="font-bold text-lg">Payment:</p>
              <div className="flex mt-4">
                <div className="flex flex-col">
                  <div className="flex flex-col mb-4">
                    <div className="flex mb-2">
                      <p className="font-semibold text-[8px] mt-2 italic text-[#2D3373]">
                        Select your payment method from the options provided to
                        complete your transaction.
                      </p>
                    </div>

                    <div className="flex relative items-center border-[#eeeeee] bg-[#D9EAFF] border-[1px] rounded-[9px] py-2 shadow-sm w-full h-[29px]">
                      <div
                        onClick={togglePaymentDropdown}
                        className="w-[100%] border border-gray-300 text-xs rounded-lg px-1  h-[29px] flex items-center justify-between cursor-pointer focus:ring-2 focus:ring-blue-500"
                      >
                        <span
                          className={
                            selectedPaymentOption
                              ? "text-gray-900"
                              : "text-gray-400"
                          }
                        >
                          {selectedPaymentOption || "Select an option"}
                        </span>
                        <BiSolidDownArrow className="text-gray-500" />
                      </div>

                      {/* Dropdown Menu */}
                      {isPaymentOpen && (
                        <div className="absolute left-0 mt-[-9rem] bg-white border text-xs border-gray-200 rounded-lg shadow-lg z-10">
                          <ul className="py-2">
                            {["1 - 10", "11 - 20", "21 - 30"].map((option) => (
                              <li
                                key={option}
                                onClick={() => handlePaymentSelect(option)}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              >
                                {option}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="relative w-full">
                      <button
                        onClick={() => {
                          setIsOpen(true);
                        }}
                        className="w-full h-[32px] text-sm mt-4 rounded-[9px] bg-[#000000] absolute text-[#ffffff] flex justify-center items-center cursor-pointer"
                      >
                        Add Card
                      </button>
                    </div>

                    {/* <div className="flex absolute mt-[5rem]">
                      <Image
                        src="/assets/visa.svg"
                        alt="avatar_img"
                        width={66}
                        height={15}
                        className=""
                      />

                      <p className="flex text-[20px] text-[#000000] ml-3">
                        46** **** **** ****
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote History */}
          <div className="flex">
            <div className="flex flex-col">
              <p className="font-bold text-lg">Quote History:</p>
              <div className="flex flex-col mt-1 w-[55%]">
                <div className="flex flex-col mr-4">
                  <div className="flex flex-col mb-1">
                    <div className="flex mb-2">
                      <div className="flex mb-2">
                        <p className="font-semibold text-[8px] mt-2 italic text-[#2D3373]">
                          Please upload your previous quotation document or
                          enter the quote amount below to help us provide an
                          accurate service estimate
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center w-[193px] bg-[#000000] rounded-[6px] h-[54px] cursor-pointer">
                  <SlCloudUpload
                    color="#ffffff"
                    className="w-[45px] h-[45px]"
                  />
                  <p className="font-semibold text-[#ffffff] ml-3">
                    Upload file
                  </p>
                </div>

                <div className="flex flex-col mt-4">
                  <div className="flex items-center  mb-3">
                    <Image
                      src="/assets/pdf.svg"
                      alt="avatar_img"
                      width={43}
                      height={43}
                    />

                    <p className="text-[16px] font-normal text-[#000000] ml-2 mr-8">
                      Quotation_one.pdf
                    </p>

                    <Image
                      src="/assets/cancel.svg"
                      alt="avatar_img"
                      width={24}
                      height={24}
                    />
                  </div>

                  <div className="flex items-center  mb-3">
                    <Image
                      src="/assets/pdf.svg"
                      alt="avatar_img"
                      width={43}
                      height={43}
                    />

                    <p className="text-[16px] font-normal text-[#000000] ml-2 mr-8">
                      Quotation_one.pdf
                    </p>

                    <Image
                      src="/assets/cancel.svg"
                      alt="avatar_img"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-end mt-4">
          <div className="flex w-[161px] h-[53px] rounded-[7px] bg-[#000000] text-[#ffffff] font-normal text-base justify-center items-center cursor-pointer">
            Submit
          </div>
          <div className="flex w-[134px] h-[53px] rounded-[7px] bg-[#BD0A0A] text-[#ffffff] font-normal text-base justify-center items-center ml-4 cursor-pointer">
            Cancel
          </div>
        </div>
      </div>

      <div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger></DialogTrigger>
          <DialogContent className="bg-[#ffffff]">
            <DialogHeader>
              <DialogTitle></DialogTitle>
              <DialogDescription>
                <AddCardPopup setIsOpen={setIsOpen} />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Service;
