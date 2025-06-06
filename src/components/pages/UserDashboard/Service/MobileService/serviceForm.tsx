"use client";

import React, { FC, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { SlCloudUpload } from "react-icons/sl";
import { BiSolidDownArrow } from "react-icons/bi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";

interface sidebarProps {
  viewing: (isViewing: string) => void;
}

const ServiceForm: FC<sidebarProps> = ({ viewing }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isUrgencyOpen, setIsUrgencyOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState("");

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
      <div className="flex md:hidden flex-col w-full p-4">
        <p className="flex md:hidden font-bold text-lg my-6">Service</p>
        <div className="flex w-full h-[40px] border-[1px] border-[#BD0A0A] mx-auto rounded-[88px] justify-between">
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

            <div className="flex flex-col w-full my-6">
              <div className="flex flex-col">
                <p className="text-base w-full mb-4">Car Name</p>
                <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-4 shadow-sm">
                  <input
                    type="text"
                    placeholder="Car Name"
                    className="outline-none w-full bg-transparent text-[13px]"
                  />
                </div>
              </div>

              <div className="flex flex-col mt-8">
                <p className="text-base w-full mb-4">Model</p>
                <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-4 shadow-sm">
                  <input
                    type="text"
                    placeholder="Model"
                    className="outline-none w-full bg-transparent text-[13px]"
                  />
                </div>
              </div>

              <div className="flex flex-col mt-8">
                <p className="text-base w-full mb-4">Number of Cars</p>
                <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-4 shadow-sm">
                  <input
                    type="text"
                    placeholder="Number of Cars"
                    className="outline-none w-full bg-transparent text-[13px]"
                  />
                </div>
              </div>

              <div className="flex w-full justify-between mt-8">
                <div className="flex flex-col w-[47%]">
                  <p className="text-base w-full mb-4">Color</p>
                  <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-4 shadow-sm">
                    <input
                      type="text"
                      placeholder="Eg. Blue"
                      className="outline-none w-full bg-transparent text-[13px]"
                    />
                  </div>
                </div>

                <div className="flex flex-col w-[47%]">
                  <p className="text-base w-full mb-4">Year</p>
                  <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-4 shadow-sm">
                    <input
                      type="text"
                      placeholder="Eg. 1965"
                      className="outline-none w-full bg-transparent text-[13px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location and Availability */}
          <div className="flex flex-col w-full">
            <div className="flex flex-col mt-4">
              <p className="font-bold text-lg">Location</p>
              <div className="flex mt-4 black">
                <div className="flex flex-col w-full">
                  <div className="flex flex-col mb-4">
                    <div className="flex mb-2">
                      <p className="text-base w-full mb-4">State/Region</p>
                    </div>

                    <div className="flex items-center border-[#eeeeee] w-full border-[1px] rounded-[5px] px-3 py-4 shadow-sm">
                      <input
                        type="text"
                        placeholder="State / Region"
                        className="outline-none w-full bg-transparent text-[13px]"
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
                      <p className="text-base w-full mb-4">Calendar Picker</p>
                    </div>

                    <div className="relative w-full max-w-xs">
                      <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="yyyy-MM-dd"
                        className="w-[370px] border border-gray-300 rounded-[9px] px-3 py-4 pr-10 shadow-sm"
                      />
                      <FaCalendarAlt className="absolute right-[-2rem] top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Urgency and Payment */}
          <div className="flex flex-col w-full">
            <div className="flex flex-col mt-4 w-full">
              <p className="font-bold text-lg">Urgency Level:</p>
              <div className="flex mt-4 w-full">
                <div className="flex flex-col mr-4 w-[45%]">
                  <div className="flex flex-col mb-4">
                    <div className="flex mb-2">
                      <p className="text-base w-full mb-4">Urgency scale</p>
                    </div>

                    <div className="flex relative max-w-xs items-center rounded-[9px] shadow-sm w-[100%]">
                      <div
                        onClick={toggleUrgencyDropdown}
                        className="w-[100%] border border-gray-300 text-xs rounded-lg px-3 py-4 flex items-center justify-between cursor-pointer focus:ring-2 focus:ring-blue-500"
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
                      <p className="text-base w-full mb-4">Amount</p>
                    </div>

                    <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[9px] px-3 py-4 shadow-sm w-[100%]">
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

            <div className="flex flex-col mt-4  w-full]">
              <p className="font-bold text-lg">Payment:</p>
              <div className="flex mt-4">
                <div className="flex flex-col">
                  <div className="flex flex-col mb-4">
                    <div className="flex mb-2">
                      <p className="font-semibold text-sm mt-2 italic text-[#000000]">
                        Select your payment method from the options provided to
                        complete your transaction.
                      </p>
                    </div>

                    <div className="flex relative items-center border-[#eeeeee] border-[1px] rounded-[9px] shadow-sm w-full">
                      <div
                        onClick={togglePaymentDropdown}
                        className="w-[100%] border border-gray-300 text-xs rounded-lg px-3 py-4 flex items-center justify-between cursor-pointer focus:ring-2 focus:ring-blue-500"
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
                        onClick={() => viewing("addcard")}
                        className="w-full px-3 py-4  text-sm mt-4 rounded-[9px] bg-[#000000] text-[#ffffff] flex justify-center items-center cursor-pointer"
                      >
                        Add Card
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote History */}
          <div className="flex mt-[2rem]">
            <div className="flex flex-col">
              <p className="font-bold text-lg">Quote History:</p>
              <div className="flex flex-col mt-1 w-full">
                <div className="flex flex-col mr-4">
                  <div className="flex flex-col mb-1">
                    <div className="flex mb-2">
                      <div className="flex mb-2">
                        <p className="font-semibold text-sm mt-2 italic text-[#2D3373]">
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
                      className="ml-10"
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
                      className="ml-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full justify-end mt-4 w-full">
          <div className="flex w-full h-[53px] rounded-[7px] bg-[#000000] text-[#ffffff] font-normal text-base justify-center items-center cursor-pointer">
            Submit
          </div>
          <div className="flex w-full h-[53px] rounded-[7px] bg-[#BD0A0A] text-[#ffffff] font-normal text-base justify-center items-center mt-4 cursor-pointer">
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;
