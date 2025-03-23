import Image from "next/image";
import React from "react";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const Landing = () => {
  return (
    <div className="w-full flex flex-col mb-12">
      <div className="w-full flex pl-12 bg-[#f0f3f8]">
        <div className="w-[50%] flex flex-col items-center justify-center">
          <div className="flex flex-col justify-start w-[90%] mr-auto">
            <p className="font-semibold text-sm text-[#1a202c]">
              Get Fair Value Estimates for Car Painting Services
            </p>
            <h1 className="font-bold text-7xl text-[#1a202c] mt-12 mb-8">
              HEADLINE
            </h1>
            <p className="font-semibold text-sm text-[#1a202c] mb-12">
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
        <div className="w-[50%] flex">
          <div className="w-[729px] h-[656px] bg-[#aab5c3] rounded-tl-[63px] mt-[5rem] flex items-center justify-center">
            <Image
              src="/assets/sample_img.svg"
              alt="avatar_img"
              width={348}
              height={348}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full pt-[10rem] mb-[10rem]">
        <h2 className="font-medium text-4xl text-center text-[#000000]">
          How It Works
        </h2>
        <p className="text-base font-medium text-[#1A202C] text-center my-12 w-[39%] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
        </p>

        <div className="flex flex-col w-[92%] mx-auto mt-4 justify-between">
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
      </div>
      <div className="flex flex-col w-full pt-[4rem] mb-[10rem]">
        <h2 className="font-medium text-4xl text-center text-[#000000]">
          Features
        </h2>
        <p className="text-base font-medium text-[#1A202C] text-center my-12 w-[39%] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
        </p>

        <div className="flex justify-between w-[92%] mx-auto mt-8">
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
      </div>
      <div className="flex flex-col w-full pt-[4rem] mb-[10rem]">
        <h2 className="font-medium text-4xl text-center text-[#000000]">
          Testimonials
        </h2>
        <p className="text-base font-medium text-[#1A202C] text-center my-12 w-[39%] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
        </p>

        <div className="flex justify-between w-[92%] mx-auto">
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
      </div>

      <div className="flex flex-col w-full pt-[4rem] mb-[10rem]">
        <h2 className="font-medium text-4xl text-center text-[#000000]">
          Contact Us
        </h2>
        <p className="text-base font-medium text-[#1A202C] text-center my-12 w-[39%] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
        </p>

        <div className="flex w-[92%] mx-auto">
          <div className="w-[50%]">
            <div className="w-[566px] h-[528px] bg-[#aab5c3] mt-[5rem] flex items-center justify-center">
              <Image
                src="/assets/sample_img.svg"
                alt="avatar_img"
                width={240}
                height={240}
              />
            </div>
          </div>
          <div className="w-[50%] flex flex-col justify-center items-center mt-12">
            <div className="flex justify-center items-center w-[80%] mb-4">
              <div className="flex w-full justify-between">
                <div className="flex w-[10%] justify-center items-center bg-[#C4C4C4] rounded-[10px] w-[51.45px] h-[51.45px]">
                  <Image
                    src="/assets/phone.svg"
                    alt="avatar_img"
                    width={28}
                    height={28}
                  />
                </div>
                <div className="flex flex-col w-[87%]">
                  <p className="font-semibold text-lg text-[#1A202C] mb-2">
                    Customer Support
                  </p>
                  <p className="font-normal text-sm text-[#1A202C]">
                    Aliquam erat volutpat. Integer malesuada turpis id fringilla
                    suscipit. Maecenas ultrices.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center w-[80%] mt-4">
              <div className="flex w-full justify-between mb-4">
                <div className="flex w-[10%] justify-center items-center bg-[#C4C4C4] rounded-[10px] w-[51.45px] h-[51.45px]">
                  <Image
                    src="/assets/tag.svg"
                    alt="avatar_img"
                    width={28}
                    height={28}
                  />
                </div>
                <div className="flex flex-col w-[87%]">
                  <p className="font-semibold text-lg text-[#1A202C] mb-2">
                    Best Price Guarantted
                  </p>
                  <p className="font-normal text-sm text-[#1A202C]">
                    Aliquam erat volutpat. Integer malesuada turpis id fringilla
                    suscipit. Maecenas ultrices.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center w-[80%] mt-4">
              <div className="flex w-full justify-between mb-4">
                <div className="flex w-[10%] justify-center items-center bg-[#C4C4C4] rounded-[10px] w-[51.45px] h-[51.45px]"></div>
                <div className="flex flex-col w-[87%]">
                  <p className="font-semibold text-lg text-[#1A202C] mb-2">
                    Many Location
                  </p>
                  <p className="font-normal text-sm text-[#1A202C]">
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
