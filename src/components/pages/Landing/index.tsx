"use client";

import React from "react";
import Image from "next/image";
import { Rubik } from "next/font/google";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./DotButton";
// import clsx from "clsx";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const cards = [
  {
    title: "Fair Value Estimates",
    desc: "Transparent pricing for car painting services.",
  },
  {
    title: "Trusted Painter",
    desc: "Verified and certified painters.",
  },
  {
    title: "Quick Service",
    desc: "Fast turnaround time.",
  },
  {
    title: "High Quality",
    desc: "Top-notch materials and workmanship.",
  },
];

const Landing = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="w-full flex flex-col mb-12">
      <div className="w-full flex flex-col md:flex-row pl-0 md:pl-12 bg-[#f0f3f8]">
        <div className="w-full pl-4 md:pl-0 mt-8 md:mt-0 md:w-[50%] flex flex-col items-center justify-center order-2 md:order-1 pb-8 md:pb-0">
          <div className="flex flex-col justify-start w-[90%] mr-auto">
            <p className="font-semibold text-xs md:text-sm text-[#1a202c]">
              Get Fair Value Estimates for Car Painting Services
            </p>
            <h1 className="font-bold text-4xl md:text-7xl text-[#1a202c] mt-6 md:mt-12 mb-4 md:mb-8">
              HEADLINE
            </h1>
            <p className="font-semibold text-xs md:text-sm text-[#1a202c] mb-6 md:mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
            <div className="items-center justify-center flex border rounded-sm border-[#a82d28] bg-[#a82d28] w-[150px] py-2">
              <p className="font-semibold text-xs text-[#ffffff]">
                Get a Quote
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%] flex order-1 md:order-2">
          <div className="w-[430px] md:w-[729px] h-[477px] md:h-[656px] bg-[#aab5c3] rounded-tl-[63px] mt-[.1rem] md:mt-[5rem] flex items-center justify-center">
            <Image
              src="/assets/sample_img.svg"
              alt="avatar_img"
              width={348}
              height={348}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full pt-[5rem] md:pt-[10rem] mb-[5rem] md:mb-[10rem]">
        <h2 className="font-bold text-2xl md:text-4xl text-center text-[#000000]">
          How It Works
        </h2>
        <p className="text-xs md:text-base font-medium text-[#1A202C] text-center my-6 md:my-12 w-[90%] md:w-[39%] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
        </p>

        <div className="md:flex flex-col w-[92%] mx-auto mt-4 justify-between hidden">
          <div className="flex justify-between w-[82%] mx-auto">
            <div
              className="w-[106px] h-[106px] rounded-[30px] flex items-center justify-center"
              style={{ backgroundColor: "rgba(72, 98, 132, .2)" }}
            >
              <Image
                src="/assets/arrow_dot.svg"
                alt="avatar_img"
                width={59}
                height={59}
              />
            </div>

            <Image
              src="/assets/spring.svg"
              alt="avatar_img"
              width={300}
              height={59}
            />

            <div
              className="w-[106px] h-[106px] rounded-[30px] flex items-center justify-center"
              style={{ backgroundColor: "rgba(72, 98, 132, .2)" }}
            >
              <Image
                src="/assets/arrow_dot.svg"
                alt="avatar_img"
                width={59}
                height={59}
              />
            </div>

            <Image
              src="/assets/spring.svg"
              alt="avatar_img"
              width={300}
              height={59}
            />

            <div
              className="w-[106px] h-[106px] rounded-[30px] flex items-center justify-center"
              style={{ backgroundColor: "rgba(72, 98, 132, .2)" }}
            >
              <Image
                src="/assets/arrow_dot.svg"
                alt="avatar_img"
                width={59}
                height={59}
              />
            </div>
          </div>
          <div className="flex justify-between w-[97%] mx-auto">
            <div className="flex flex-col justify-center items-center w-[17rem]">
              <p className="font-semibold text-base text-[#1A202C] my-4">
                Step 1
              </p>

              <p className="font-medium text-sm text-[#1A202C] text-center">
                Enter your car details (e.g., car name, color, model, year).
              </p>
            </div>

            <div className="flex flex-col justify-center items-center w-[17rem]">
              <p className="font-semibold text-base text-[#1A202C] my-4">
                Step 2
              </p>

              <p className="font-medium text-sm text-[#1A202C] text-center">
                Get a fair value estimate for your car painting service.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center w-[17rem]">
              <p className="font-semibold text-base text-[#1A202C] my-4">
                Step 3
              </p>

              <p className="font-medium text-sm text-[#1A202C] text-center">
                Connect with trusted painters and schedule an appointment.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[92%] mx-auto mt-4 justify-between md:hidden">
          <div className="flex flex-col items-center justify-center md:flex-row justify-between w-[82%] mx-auto">
            <div
              className="w-[106px] h-[106px] rounded-[30px] flex items-center justify-center"
              style={{ backgroundColor: "rgba(72, 98, 132, .2)" }}
            >
              <Image
                src="/assets/arrow_dot.svg"
                alt="avatar_img"
                width={59}
                height={59}
              />
            </div>

            <div className="flex flex-col justify-center items-center w-[17rem] mb-8 md:mb-0">
              <p className="font-semibold text-base text-[#1A202C] my-4">
                Step 1
              </p>

              <p className="font-medium text-sm text-[#1A202C] text-center">
                Enter your car details (e.g., car name, color, model, year).
              </p>
            </div>

            <div
              className="w-[106px] h-[106px] rounded-[30px] flex items-center justify-center"
              style={{ backgroundColor: "rgba(72, 98, 132, .2)" }}
            >
              <Image
                src="/assets/arrow_dot.svg"
                alt="avatar_img"
                width={59}
                height={59}
              />
            </div>

            <div className="flex flex-col justify-center items-center w-[17rem] mb-8 md:mb-0">
              <p className="font-semibold text-base text-[#1A202C] my-4">
                Step 2
              </p>

              <p className="font-medium text-sm text-[#1A202C] text-center">
                Get a fair value estimate for your car painting service.
              </p>
            </div>

            <div
              className="w-[106px] h-[106px] rounded-[30px] flex items-center justify-center"
              style={{ backgroundColor: "rgba(72, 98, 132, .2)" }}
            >
              <Image
                src="/assets/arrow_dot.svg"
                alt="avatar_img"
                width={59}
                height={59}
              />
            </div>

            <div className="flex flex-col justify-center items-center w-[17rem] mb-8 md:mb-0">
              <p className="font-semibold text-base text-[#1A202C] my-4">
                Step 3
              </p>

              <p className="font-medium text-sm text-[#1A202C] text-center">
                Connect with trusted painters and schedule an appointment.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full pt-[4rem] mb-[10rem]">
        <h2 className="font-bold text-2xl md:text-4xl text-center text-[#000000]">
          Features
        </h2>
        <p className="text-xs md:text-base font-medium text-[#1A202C] text-center my-6 md:my-12 w-[90%] md:w-[39%] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
        </p>

        <div className="md:flex justify-between w-[92%] mx-auto mt-8 hidden">
          <div className="flex flex-col justify-center items-center">
            <p className="font-semibold text-xl text-[#1A202C]">
              Fair Value Estimates
            </p>
            <div className="flex w-[270px] mt-8 h-[388px] bg-[#DEE5ED] items-center justify-center">
              <p className="font-semibold text-lg [#000000] text-center">
                Transparent pricing for car painting services.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="font-semibold text-xl text-[#1A202C]">
              Trusted Painters:
            </p>
            <div className="flex w-[270px] mt-8 h-[388px] bg-[#DEE5ED] items-center justify-center">
              <p className="font-semibold text-lg [#000000] text-center">
                Verified and certified painters.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="font-semibold text-xl text-[#1A202C]">
              Easy Booking:
            </p>
            <div className="flex w-[270px] mt-8 h-[388px] bg-[#DEE5ED] items-center justify-center">
              <p className="font-semibold text-lg [#000000] text-center">
                Schedule appointments with just a few clicks.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="font-semibold text-xl text-[#1A202C]">Bulk Upload</p>
            <div className="flex w-[270px] mt-8 h-[388px] bg-[#DEE5ED] items-center justify-center">
              <p className="font-semibold text-lg [#000000] text-center">
                Upload multiple car scenarios and get downloadable quotes.
              </p>
            </div>
          </div>
        </div>

        {/* mobile view */}

        {/* <div className="max-w-screen-md mx-auto md:hidden flex flex-col  overflow-x-hidden">
          <div
            ref={containerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar space-x-4 px-4"
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className="w-[50%] snap-start bg-gradient-to-b from-gray-100 to-white rounded-xl p-4 flex-shrink-0 shadow"
              >
                <div className="bg-gray-300 rounded-md h-32 mb-4" />
                <h3 className="text-lg font-bold text-red-600">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-left ml-[30%] mt-4 gap-3">
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={clsx(
                  "w-3 h-3 rounded-full bg-red-500 transition-all duration-300",
                  {
                    "opacity-100 shadow-lg scale-125": i === activeIndex,
                    "opacity-50": i !== activeIndex,
                  }
                )}
              />
            ))}
          </div>
        </div> */}
        <div className="flex flex-col items-center justify-between overflow-hidden @container md:hidden">
          <div className="flex-1 overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="w-[50%] snap-start bg-gradient-to-b from-gray-100 to-white rounded-xl p-4 flex-shrink-0 shadow ml-4"
                >
                  <div className="bg-gray-300 rounded-md h-32 mb-4" />
                  <h3 className="text-lg font-bold text-red-600">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex">
            <div className="flex mt-8">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={"embla__dot".concat(
                    index === selectedIndex ? " embla__dot--selected" : ""
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full pt-[4rem] mb-[10rem]">
        <h2 className="font-bold text-2xl md:text-4xl text-center text-[#000000]">
          Testimonials
        </h2>
        <p className="text-xs md:text-base font-medium text-[#1A202C] text-center my-6 md:my-12 w-[90%] md:w-[39%] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
        </p>

        <div className="md:flex justify-between w-[92%] mx-auto hidden">
          <div className="w-[350px] px-4 py-8 bg-[#D3DCE7] flex flex-col rounded-[10px]">
            <div className="flex w-[70%] mx-auto justify-between">
              <div className="flex flex-col">
                <p className="font-semibold text-base text-[#486284]">
                  Viezh Robert
                </p>
                <p className="font-normal text-xs text-[#486284]">
                  Warsaw, Poland
                </p>
              </div>
              <p className="font-normal text-sm text-[#486284] items-center justify-center flex">
                4.5
              </p>
            </div>

            <div
              className="font-medium text-sm text-[#486284] mt-4"
              style={{ fontFamily: rubik.style.fontFamily }}
            >
              “Wow... I am very happy to use this VPN, it turned out to be more
              than my expectations and so far there have been no problems.
              LaslesVPN always the best”.
            </div>
          </div>
          <div className="w-[350px] px-4 py-8 bg-[#D3DCE7] flex flex-col rounded-[10px]">
            <div className="flex w-[70%] mx-auto justify-between">
              <div className="flex flex-col">
                <p className="font-semibold text-base text-[#486284]">
                  Viezh Robert
                </p>
                <p className="font-normal text-xs text-[#486284]">
                  Warsaw, Poland
                </p>
              </div>
              <p className="font-normal text-sm text-[#486284] items-center justify-center flex">
                4.5
              </p>
            </div>

            <div
              className="font-medium text-sm text-[#486284] mt-4"
              style={{ fontFamily: rubik.style.fontFamily }}
            >
              “Wow... I am very happy to use this VPN, it turned out to be more
              than my expectations and so far there have been no problems.
              LaslesVPN always the best”.
            </div>
          </div>

          <div className="w-[350px] px-4 py-8 bg-[#D3DCE7] flex flex-col rounded-[10px]">
            <div className="flex w-[70%] mx-auto justify-between">
              <div className="flex flex-col">
                <p className="font-semibold text-base text-[#486284]">
                  Viezh Robert
                </p>
                <p className="font-normal text-xs text-[#486284]">
                  Warsaw, Poland
                </p>
              </div>
              <p className="font-normal text-sm text-[#486284] items-center justify-center flex">
                4.5
              </p>
            </div>

            <div
              className="font-medium text-sm text-[#486284] mt-4"
              style={{ fontFamily: rubik.style.fontFamily }}
            >
              “Wow... I am very happy to use this VPN, it turned out to be more
              than my expectations and so far there have been no problems.
              LaslesVPN always the best”.
            </div>
          </div>
        </div>

        {/* <div className="max-w-screen-md mx-auto md:hidden flex flex-col  overflow-x-hidden">
          <div
            ref={containerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar space-x-4 px-4"
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className="w-[50%] snap-start bg-gradient-to-b from-gray-100 to-white rounded-xl p-4 flex-shrink-0 shadow"
              >
                <div className="bg-gray-300 rounded-md h-32 mb-4" />
                <h3 className="text-lg font-bold text-red-600">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-left ml-[30%] mt-4 gap-3">
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={clsx(
                  "w-3 h-3 rounded-full bg-red-500 transition-all duration-300",
                  {
                    "opacity-100 shadow-lg scale-125": i === activeIndex,
                    "opacity-50": i !== activeIndex,
                  }
                )}
              />
            ))}
          </div>
        </div> */}
      </div>

      <div className="flex flex-col w-full pt-[4rem] mb-[10rem]">
        <h2 className="font-bold text-2xl md:text-4xl text-center text-[#000000]">
          Contact Us
        </h2>
        <p className="text-xs md:text-base font-medium text-[#1A202C] text-center my-6 md:my-12 w-[90%] md:w-[39%] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
        </p>

        <div className="flex w-full md:w-[92%] md:mx-auto flex-col md:flex-row">
          <div className="md:w-[50%] w-full">
            <div className="w-full md:w-[566px] h-[277px] md:h-[528px] bg-[#aab5c3] mt-[5rem] flex items-center justify-center">
              <Image
                src="/assets/sample_img.svg"
                alt="avatar_img"
                width={240}
                height={240}
                className="hidden md:block"
              />
              <Image
                src="/assets/sample_img.svg"
                alt="avatar_img"
                width={200}
                height={200}
                className="block md:hidden"
              />
            </div>
          </div>
          <div className="w-full md:w-[50%] flex flex-col justify-center items-center mt-12">
            <div className="flex justify-center items-center w-[80%] mb-4">
              <div className="flex w-full justify-between">
                <div className="flex justify-center items-center bg-[#C4C4C4] rounded-[10px] w-[30px] md:w-[51.45px] h-[30px] md:h-[51.45px]">
                  <Image
                    src="/assets/phone.svg"
                    alt="avatar_img"
                    width={28}
                    height={28}
                    className="hidden md:block"
                  />
                  <Image
                    src="/assets/phone.svg"
                    alt="avatar_img"
                    width={20}
                    height={20}
                    className="block md:hidden"
                  />
                </div>
                <div className="flex flex-col w-[87%] ml-6">
                  <p className="font-semibold text-sm md:text-lg text-[#1A202C] mb-2">
                    Customer Support
                  </p>
                  <p className="font-normal text-xs md:text-sm text-[#1A202C]">
                    Aliquam erat volutpat. Integer malesuada turpis id fringilla
                    suscipit. Maecenas ultrices.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center w-[80%] mt-4">
              <div className="flex w-full justify-between mb-4">
                <div className="flex justify-center items-center bg-[#C4C4C4] rounded-[10px] w-[30px] md:w-[51.45px] h-[30px] md:h-[51.45px]">
                  <Image
                    src="/assets/tag.svg"
                    alt="avatar_img"
                    width={28}
                    height={28}
                    className="hidden md:block"
                  />
                  <Image
                    src="/assets/tag.svg"
                    alt="avatar_img"
                    width={20}
                    height={20}
                    className="block md:hidden"
                  />
                </div>
                <div className="flex flex-col w-[87%] ml-6">
                  <p className="font-semibold text-sm md:text-lg text-[#1A202C] mb-2">
                    Best Price Guarantted
                  </p>
                  <p className="font-normal text-xs md:text-sm text-[#1A202C]">
                    Aliquam erat volutpat. Integer malesuada turpis id fringilla
                    suscipit. Maecenas ultrices.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center w-[80%] mt-4">
              <div className="flex w-full justify-between mb-4">
                <div className="flex w-[10%] justify-center items-center bg-[#C4C4C4] rounded-[10px] w-[30px] md:w-[51.45px] h-[30px] md:h-[51.45px]"></div>
                <div className="flex flex-col w-[87%] ml-6">
                  <p className="font-semibold text-sm md:text-lg text-[#1A202C] mb-2">
                    Many Location
                  </p>
                  <p className="font-normal text-xs md:text-sm text-[#1A202C]">
                    Aliquam erat volutpat. Integer malesuada turpis id fringilla
                    suscipit. Maecenas ultrices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
