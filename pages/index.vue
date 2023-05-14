<template>
  <div
    class="w-full min-h-screen xl:px-[100px] lg:px-[50px] px-[20px] font-general max-w-screen-2xl m-auto"
  >
    <Header></Header>
    <div class="section1 lg:mt-[30px] flex">
      <div class="flex-1 w-[60%]">
        <div class="text-maketer font-semibold text-[50px]">
          Hire fast marketer person
          <span class="text-black">with maketer.</span>
        </div>
        <div class="flex mt-10">
          <button class="btn-white">Getting Started</button>
          <a
            href="#"
            class="text-sm font-semibold leading-6 text-gray-900 flex items-center ml-7 hover:text-maketer hover:fill-maketer"
            >Explore Now<svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 ml-[11.5px]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </a>
          <div class="arrow right"></div>
        </div>
      </div>
      <div class="flex w-[40%] z-10">
        <img
          class="text-sm w-[285.81px] h-[268px]"
          src="@/assets/svg/argency.svg"
          alt=""
        />
      </div>
    </div>
    <div class="section2 mt-[50px] xl:flex justify-between">
      <div class="w-full xl:w-[793px] h-[334px] flex relative flex-initial">
        <div class="w-full h-full flex flex-col justify-between p-[24px]">
          <div class="flex">
            <img
              class="text-sm w-[129px] h-[151px] flex-none"
              src="@/assets/svg/service-img-left.svg"
              alt=""
            />
            <div
              class="flex-col ml-[28px] h-[151px] flex justify-between"
              style="color: #101010"
            >
              <p alt="title" class="text-2xl font-semibold">Main Services</p>
              <div class="flex items-center">
                <div
                  class="w-[26px] h-[26px] bg-[#FFD600] flex items-center justify-center rounded-[8px]"
                  alt="count"
                >
                  1
                </div>
                <div
                  class="text-[14px] text-[#101010] ml-[12px] font-medium"
                  alt="content"
                >
                  Find marketer
                </div>
              </div>
              <div class="flex items-center">
                <div
                  class="w-[26px] h-[26px] bg-[#FFD600] flex items-center justify-center rounded-[8px]"
                  alt="count"
                >
                  2
                </div>
                <div
                  class="text-[14px] text-[#101010] ml-[12px] font-medium"
                  alt="content"
                >
                  Find marketing job
                </div>
              </div>
              <div class="flex items-center">
                <div
                  class="w-[26px] h-[26px] bg-[#FFD600] flex items-center justify-center rounded-[8px]"
                  alt="count"
                >
                  3
                </div>
                <div
                  class="text-[14px] text-[#101010] ml-[12px] font-medium"
                  alt="content"
                >
                  Latest news digital marketing
                </div>
              </div>
            </div>
            <div class="ml-[48px] h-[151px] hidden md:flex items-center">
              <img
                class="w-[100px] flex-none"
                src="@/assets/svg/long-arrow.svg"
                alt=""
              />
            </div>
          </div>
          <div
            class="w-full h-[104px] bg-[#101010] rounded-[20px] flex flex-wrap justify-around items-center"
          >
            <div class="flex flex-col" alt="content">
              <span class="font-bold text-white text-[28px]">16+</span>
              <span class="font-medium text-white text-[12px]">Countries</span>
            </div>
            <div class="flex flex-col" alt="content">
              <span class="font-bold text-white text-[28px]">50k+</span>
              <span class="font-medium text-white text-[12px]"
                >Active User</span
              >
            </div>
            <div class="flex flex-col" alt="content">
              <span class="font-bold text-white text-[28px]">10+</span>
              <span class="font-medium text-white text-[12px]"
                >Top Companies</span
              >
            </div>
            <div class="flex flex-col" alt="content">
              <span class="font-bold text-white text-[28px]">10k+</span>
              <span class="font-medium text-white text-[12px]"
                >Marketer Hired</span
              >
            </div>
          </div>
        </div>
        <div
          class="bg-[#00e56f] w-[100%] xl:w-[90%] rounded-[30px] xl:rounded-br-none h-[100%] absolute -z-10"
        ></div>
        <div
          class="bg-[#00e56f] w-[100%] rounded-r-[30px] rounded-b-[30px] h-[75%] absolute right-0 bottom-0 -z-10"
        ></div>
        <img
          class="hidden xl:block w-[109px] h-[109px] absolute top-[55px] right-[70px] z-10"
          src="@/assets/svg/ellipse-left.svg"
          alt=""
        />
        <img
          class="hidden xl:block absolute h-[280px] w-[280px] -top-[100px] -right-[85px] -z-1 overflow-hidden"
          src="@/assets/svg/rectangle-left.svg"
          alt=""
        />
      </div>
      <div
        class="flex flex-initial w-full xl:w-[266px] h-[334px] mt-[100px] xl:mt-0 rounded-[30px] z-10 relative"
        style="
          background: url(.png),
            radial-gradient(
              55.49% 55.49% at 50% 44.51%,
              #ffa238 0%,
              #ffd600 100%
            );
        "
      >
        <img
          class="w-[109px] h-[109px] absolute -top-[54px] left-[36px] z-10"
          src="@/assets/svg/ellipse-right.svg"
          alt=""
        />
        <img
          class="absolute h-[152px] w-[152px] -top-[76px] left-[14px] -z-1"
          src="@/assets/svg/rectangle-right.svg"
          alt=""
        />
        <img
          class="absolute h-full w-full -top-[0px] left-[0px] -z-10"
          src="@/assets/svg/service-img-right.svg"
          alt=""
        />
        <span class="absolute left-[28px] font-semibold text-[32px] top-[105px]"
          >10+ years</span
        >
        <span class="absolute left-[28px] top-[144px] font-medium"
          >Maketer founded</span
        >
      </div>
    </div>
    <div
      class="section3 flex items-center flex-wrap justify-around xl:justify-between mt-[44px]"
    >
      <img
        class="h-full w-[160px] m-[20px]"
        src="@/assets/png/Huawei.png"
        alt=""
      />
      <img
        class="h-full w-[130px] m-[20px]"
        src="@/assets/png/Apple.png"
        alt=""
      />
      <img
        class="h-full w-[180px] m-[20px]"
        src="@/assets/png/Honda.png"
        alt=""
      />
      <img
        class="h-full w-[150px] m-[20px]"
        src="@/assets/png/TikTok.png"
        alt=""
      />
      <img
        class="h-full w-[240px] m-[20px]"
        src="@/assets/png/Tencent.png"
        alt=""
      />
    </div>
    <div class="section4 mt-[110px] flex">
      <div alt="left" class="w-[45%] h-[400px] relative">
        <div
          class="absolute w-[292px] h-[191px] bg-white shadow shadow-blue-500/30 top-0 left-0 z-10 rounded-[18px] pt-[30px] pl-[24px]"
        >
          <div class="text-[18px] font-medium">Marketing Experience</div>
          <div class="flex mt-[10px]">
            <img src="@/assets/svg/_Google.svg" />
            <div class="ml-[16px]" alt="content">
              <p class="text-[18.67px] font-medium">Google.inc</p>
              <p class="text-[14.67px] font-medium text-[#D9D9D9]">
                Digital ads ⌗ 2021 - 2022
              </p>
            </div>
          </div>
          <div class="flex mt-[10px]">
            <img src="@/assets/svg/_Instagram.svg" />
            <div class="ml-[16px]" alt="content">
              <p class="text-[18.67px] font-medium">Instagram</p>
              <p class="text-[14.67px] font-medium text-[#D9D9D9]">
                Branding Digital ⌗ 2019 - 2021
              </p>
            </div>
          </div>
        </div>
        <div
          class="absolute bg-[#FAFAFA] w-[432px] h-[355px] rounded-[24px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
        ></div>
        <div
          class="absolute w-[365px] h-[239px] bg-white bottom-0 right-0 z-20 shadow shadow-blue-500/30 rounded-[18px] pl-[30px]"
        >
          <p class="text-[24px] font-medium mt-[25px]">Skill & Expertise</p>
          <div class="flex flex-wrap gap-[12px]">
            <div
              class="bg-[#F2F2F2] rounded-[12px] p-[10px] leading-[20px] text-[14.6667px]"
            >
              Social media ads
            </div>
            <div
              class="bg-[#F2F2F2] rounded-[12px] p-[10px] leading-[20px] text-[14.6667px]"
            >
              Campaign
            </div>
            <div
              class="bg-[#F2F2F2] rounded-[12px] p-[10px] leading-[20px] text-[14.6667px]"
            >
              Motion
            </div>
            <div
              class="bg-[#F2F2F2] rounded-[12px] p-[10px] leading-[20px] text-[14.6667px]"
            >
              Promotor
            </div>
            <div
              class="bg-[#F2F2F2] rounded-[12px] p-[10px] leading-[20px] text-[14.6667px]"
            >
              Branding Campaign
            </div>
            <div
              class="bg-[#F2F2F2] rounded-[12px] p-[10px] leading-[20px] text-[14.6667px]"
            >
              Digital Consultation
            </div>
            <div
              class="bg-[#F2F2F2] rounded-[12px] p-[10px] leading-[20px] text-[14.6667px]"
            >
              Media Admin
            </div>
          </div>
        </div>
      </div>
      <div alt="right" class="w-[55%] pl-[65px]">
        <div class="font-medium text-[48px] leading-[64px]">
          Streamline marketer with advanced features
        </div>
        <div class="text-[18px] leading-[30px] font-medium text-[#B6B6B6]">
          Our advanced feature saves you time and helps you find your dream
          marketer more efficiently, you can quickly search to find most
          relevant marketer.
        </div>
        <div class="flex mt-[27.5px]">
          <img src="@/assets/svg/arrowcircledown.svg" />
          <span
            class="text-[18px] leading-[26px] font-medium ml-[9.33px] text-[#B6B6B6]"
            >Search by our advance search engine</span
          >
        </div>
        <div class="flex mt-[23px]">
          <img src="@/assets/svg/arrowcircledown.svg" />
          <span
            class="text-[18px] leading-[26px] font-medium ml-[9.33px] text-[#B6B6B6]"
            >Filter by your own personalized location</span
          >
        </div>
        <div class="flex mt-[23px] items-baseline max-w-[400px]">
          <img src="@/assets/svg/arrowcircledown.svg" />
          <span
            class="text-[18px] leading-[26px] font-medium ml-[9.33px] text-[#B6B6B6]"
            >Refining marketing position with top marketer top experience.</span
          >
        </div>
      </div>
    </div>
    <div class="section5 mt-[110px] flex">
      <div alt="left" class="w-[45%] h-[385px] flex flex-col justify-center">
        <p class="font-medium text-[48px] leading-[64px] max-w-[436px]">
          Available many jobs for marketing field
        </p>
        <p class="text-[18px] leading-[30px] text-[#B6B6B6]">
          you can find jobs for marketing worldwide with hybrid and remote type!
          Amazing!
        </p>
      </div>
      <div alt="left" class="w-[55%] h-[385px] relative">
        <div
          class="w-[432px] h-[355px] absolute top-0 left-0 bg-[#FAFAFA] rounded-[24px] z-0"
        ></div>
        <div
          class="w-[500px] h-[327px] absolute bottom-0 right-0 bg-white shadow shadow-blue-500/30 rounded-[24px] z-10 pt-[54.79px] pl-[41px]"
        >
          <img src="@/assets/svg/_Google.svg" class="w-[50.68px] h-[50.68px]" />
          <p class="text-[24.6575px] leading-[33px] font-medium mt-[20px]">
            Senior Marketing Design
          </p>
          <div class="flex items-center text-[16.44px] text-[#D9D9D9]">
            <div>Remote work</div>
            <div
              class="bg-[#D9D9D9] w-[6.85px] h-[6.85px] rounded-full mx-2.5"
            ></div>
            <div>$1000 - $2000</div>
          </div>
          <p class="text-[16.4384px] leading-[22px] text-[#D0CFCF] mt-[10px]">
            We are looking for talented marketing design to scale our business
            to worldwide country
          </p>
          <div class="flex pt-[22px] flex-wrap gap-[16px]">
            <div
              class="py-[5.5px] px-[25px] bg-[#FAFAFA] text-[#D0CFCF] text-[16.4384px] font-medium rounded-[20.55px] leading-[22px]"
            >
              Digital
            </div>
            <div
              class="py-[5.5px] px-[25px] bg-[#FAFAFA] text-[#D0CFCF] text-[16.4384px] font-medium rounded-[20.55px] leading-[22px]"
            >
              Business
            </div>
            <div
              class="py-[5.5px] px-[25px] bg-[#FAFAFA] text-[#D0CFCF] text-[16.4384px] font-medium rounded-[20.55px] leading-[22px]"
            >
              Marketing
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div alt="footer" class="w-full h-[842px] mt-[110px] bg-[#FAFAFA] pt-[100px]">
    <div class="text-center text-[48px] leading-[64px]" alt="title">
      2000+ Job Openings
    </div>
    <div
      class="text-center text-[18px] leading-[30px] text-[#B6B6B6] mt-[24px]"
    >
      Explore thousand of marketing job opportunities and find your dream <br />
      company with our comprehensive marketing job search platform
    </div>
    <div
      class="h-[476px] w-full px-[100px] mt-[38px] flex flex-wrap gap-[30px]"
    >
      <div
        class="w-[340px] h-[222px] bg-white shadow shadow-blue-500/30 rounded-[16.77px] z-10 pt-[37.15px] pl-[27.95px]"
      >
        <img src="@/assets/svg/_Google.svg" class="w-[34.47px] h-[34.47px]" />
        <p class="text-[16.7671px] leading-[23px] font-medium mt-[13px]">
          Senior Marketing Design
        </p>
        <div class="flex items-center text-[11.1781px] text-[#D9D9D9]">
          <div>Remote work</div>
          <div
            class="bg-[#D9D9D9] w-[4.66px] h-[4.66px] rounded-full mx-2.5"
          ></div>
          <div>$1000 - $2000</div>
        </div>
        <p class="text-[11.1781px] leading-[15px] text-[#D0CFCF] mt-[8px]">
          We are looking for talented marketing design to scale our business to
          worldwide country
        </p>
        <div class="flex pt-[15px] flex-wrap gap-[11.18px]">
          <div
            class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"
          >
            Digital
          </div>
          <div
            class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"
          >
            Business
          </div>
          <div
            class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"
          >
            Marketing
          </div>
        </div>
      </div>
      <div
        class="w-[340px] h-[222px] bg-white shadow shadow-blue-500/30 rounded-[16.77px] z-10 pt-[37.15px] pl-[27.95px]"
      >
        <img src="@/assets/svg/_Google.svg" class="w-[34.47px] h-[34.47px]" />
        <p class="text-[16.7671px] leading-[23px] font-medium mt-[13px]">
          Senior Marketing Design
        </p>
        <div class="flex items-center text-[11.1781px] text-[#D9D9D9]">
          <div>Remote work</div>
          <div
            class="bg-[#D9D9D9] w-[4.66px] h-[4.66px] rounded-full mx-2.5"
          ></div>
          <div>$1000 - $2000</div>
        </div>
        <p class="text-[11.1781px] leading-[15px] text-[#D0CFCF] mt-[8px]">
          We are looking for talented marketing design to scale our business to
          worldwide country
        </p>
        <div class="flex pt-[15px] flex-wrap gap-[11.18px]">
          <div
            class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"
          >
            Digital
          </div>
          <div
            class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"
          >
            Business
          </div>
          <div
            class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"
          >
            Marketing
          </div>
        </div>
      </div>
      <div
        class="w-[340px] h-[222px] bg-white shadow shadow-blue-500/30 rounded-[16.77px] z-10 pt-[37.15px] pl-[27.95px]"
      >
        <img src="@/assets/svg/_Google.svg" class="w-[34.47px] h-[34.47px]" />
        <p class="text-[16.7671px] leading-[23px] font-medium mt-[13px]">
          Senior Marketing Design
        </p>
        <div class="flex items-center text-[11.1781px] text-[#D9D9D9]">
          <div>Remote work</div>
          <div
            class="bg-[#D9D9D9] w-[4.66px] h-[4.66px] rounded-full mx-2.5"
          ></div>
          <div>$1000 - $2000</div>
        </div>
        <p class="text-[11.1781px] leading-[15px] text-[#D0CFCF] mt-[8px]">
          We are looking for talented marketing design to scale our business to
          worldwide country
        </p>
        <div class="flex pt-[15px] flex-wrap gap-[11.18px]">
          <div
            class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"
          >
            Digital
          </div>
          <div
            class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"
          >
            Business
          </div>
          <div
            class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"
          >
            Marketing
          </div>
        </div>
      </div>
      <div
        class="w-[340px] h-[222px] bg-white shadow shadow-blue-500/30 rounded-[16.77px] z-10 pt-[37.15px] pl-[27.95px]"
      >
        <img src="@/assets/svg/_Google.svg" class="w-[34.47px] h-[34.47px]" />
        <p class="text-[16.7671px] leading-[23px] font-medium mt-[13px]">
          Senior Marketing Design
        </p>
        <div class="flex items-center text-[11.1781px] text-[#D9D9D9]">
          <div>Remote work</div>
          <div
            class="bg-[#D9D9D9] w-[4.66px] h-[4.66px] rounded-full mx-2.5"
          ></div>
          <div>$1000 - $2000</div>
        </div>
        <p class="text-[11.1781px] leading-[15px] text-[#D0CFCF] mt-[8px]">
          We are looking for talented marketing design to scale our business to
          worldwide country
        </p>
        <div class="flex pt-[15px] flex-wrap gap-[11.18px]">
          <div
            class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"
          >
            Digital
          </div>
          <div
            class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"
          >
            Business
          </div>
          <div
            class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"
          >
            Marketing
          </div>
        </div>
      </div>
      <div
        class="w-[340px] h-[222px] bg-white shadow shadow-blue-500/30 rounded-[16.77px] z-10 pt-[37.15px] pl-[27.95px]"
      >
        <img src="@/assets/svg/_Google.svg" class="w-[34.47px] h-[34.47px]" />
        <p class="text-[16.7671px] leading-[23px] font-medium mt-[13px]">
          Senior Marketing Design
        </p>
        <div class="flex items-center text-[11.1781px] text-[#D9D9D9]">
          <div>Remote work</div>
          <div
            class="bg-[#D9D9D9] w-[4.66px] h-[4.66px] rounded-full mx-2.5"
          ></div>
          <div>$1000 - $2000</div>
        </div>
        <p class="text-[11.1781px] leading-[15px] text-[#D0CFCF] mt-[8px]">
          We are looking for talented marketing design to scale our business to
          worldwide country
        </p>
        <div class="flex pt-[15px] flex-wrap gap-[11.18px]">
          <div
            class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"
          >
            Digital
          </div>
          <div
            class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"
          >
            Business
          </div>
          <div
            class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"
          >
            Marketing
          </div>
        </div>
      </div>
      <div
        class="w-[340px] h-[222px] bg-white shadow shadow-blue-500/30 rounded-[16.77px] z-10 pt-[37.15px] pl-[27.95px]"
      >
        <img src="@/assets/svg/_Google.svg" class="w-[34.47px] h-[34.47px]" />
        <p class="text-[16.7671px] leading-[23px] font-medium mt-[13px]">
          Senior Marketing Design
        </p>
        <div class="flex items-center text-[11.1781px] text-[#D9D9D9]">
          <div>Remote work</div>
          <div
            class="bg-[#D9D9D9] w-[4.66px] h-[4.66px] rounded-full mx-2.5"
          ></div>
          <div>$1000 - $2000</div>
        </div>
        <p class="text-[11.1781px] leading-[15px] text-[#D0CFCF] mt-[8px]">
          We are looking for talented marketing design to scale our business to
          worldwide country
        </p>
        <div class="flex pt-[15px] flex-wrap gap-[11.18px]">
          <div
            class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"
          >
            Digital
          </div>
          <div
            class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"
          >
            Business
          </div>
          <div
            class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"
          >
            Marketing
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
