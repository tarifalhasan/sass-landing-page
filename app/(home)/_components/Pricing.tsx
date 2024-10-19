const Pricing = () => {
  return (
    <div className="container  z-30 relative ">
      <div className="flex pb-10 xl:pb-16 items-center justify-between gap-6 flex-wrap">
        <div className="space-y-10 lg:space-y-16">
          <h2 className="text-3xl max-w-[660px] font-bold font-kyiv -tracking-[0.96px] leading-[100%] lg:text-5xl">
            Choose a Plan That Fits Your Needs
          </h2>
          <button className="btn_outlined">Request a Demo</button>
        </div>
        <div className="inline-flex gap-4 items-center max-w-[350px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
          >
            <path
              d="M16.464 30.5C18.049 30.5 18.9856 29.3513 18.9856 27.6282C18.9856 24.6846 17.1844 23.1051 16.9683 17.2897C21.9395 20.3769 22.3718 22.6744 24.8934 24.182C25.5418 24.541 26.0461 24.6846 26.6225 24.6846C27.487 24.6846 28.2075 24.2538 28.7118 23.4641C28.928 23.1051 29 22.6744 29 22.2436C29 21.3821 28.4236 20.5205 27.415 19.9462C24.8213 18.5103 22.4438 19.2282 17.3285 16.5718C22.4438 13.7718 24.8213 14.4897 27.415 13.0538C28.4236 12.4077 29 11.618 29 10.6846C29 10.3256 28.928 9.89487 28.7118 9.4641C28.2075 8.67436 27.487 8.24359 26.6225 8.24359C26.0461 8.24359 25.5418 8.38718 24.8934 8.74615C22.3718 10.2538 21.9395 12.7667 16.9683 15.7821C17.1124 9.96667 18.9856 8.31539 18.9856 5.3C18.9856 3.57692 18.049 2.5 16.464 2.5C14.951 2.5 14.0144 3.57692 14.0144 5.3C14.0144 8.31539 16.0317 9.89487 16.1758 15.7821C11.0605 12.6949 10.6282 10.2538 8.03458 8.74615C7.45821 8.38718 6.95389 8.24359 6.37752 8.24359C5.51297 8.24359 4.79251 8.67436 4.28818 9.4641C4.07205 9.89487 4 10.3256 4 10.6846C4 11.618 4.57637 12.4077 5.58501 13.0538C8.17867 14.4897 10.4121 13.7718 15.6715 16.5718C10.5562 19.3 8.10663 18.5103 5.58501 19.9462C4.57637 20.5205 4 21.3821 4 22.2436C4 22.6744 4.07205 23.1051 4.28818 23.4641C4.79251 24.2538 5.51297 24.6846 6.37752 24.6846C6.95389 24.6846 7.45821 24.541 8.03458 24.182C10.6282 22.6744 11.0605 20.4487 16.1037 17.2897C15.8876 23.1769 14.0144 24.6128 14.0144 27.6282C14.0144 29.3513 14.951 30.5 16.464 30.5Z"
              fill="#AB49FF"
            />
          </svg>
          <p className="flex-1 text-base text-[#C8C9D0] font-medium leading-[130%]">
            Affordable solutions for every stage of growth.
          </p>
        </div>
      </div>
      <div className="bg-[#131317] z-40 rounded-[32px]   grid grid-cols-12 relative  gap-y-14 px-6 xl:px-12 py-12">
        <div className="hover:bg-[#3E2454] transition-all duration-500 rounded-[12px] pt-[51px] pb-[35px] px-10 col-span-12 pricing_card  md:col-span-4  flex flex-col justify-between gap-5">
          <div className="flex flex-col gap-y-3">
            <h3 className="text-4xl font-bold font-kyiv">
              $15
              <span className="text-base font-sans font-normal">/month</span>
            </h3>

            <h4 className="text-2xl xl:text-[1.72rem] font-medium font-kyiv">
              Starter
            </h4>
            <p className="text-[0.94rem] leading-[150%] font-medium">
              Ideal for small teams and startups. Includes up to 500
              queries/month, basic support, and access to all core features.
              Perfect for web3 projects just starting out, offering automation
              without overwhelming their budget.
            </p>
          </div>
          <button className="text-[0.94rem] hover:bg-purple-500 transition-colors duration-500 h-12 rounded-full bg-[#383838]">
            Choose plan
          </button>
        </div>
        <div className="hover:bg-[#3E2454] transition-all duration-500 col-span-12 rounded-[12px] px-10 pt-[51px] pb-[35px] pricing_card md:col-span-4  flex flex-col justify-between gap-5">
          <div className="flex flex-col gap-y-3">
            <h3 className="text-4xl font-bold font-kyiv">
              $100
              <span className="text-base font-sans font-normal">/month</span>
            </h3>

            <h4 className="text-2xl xl:text-[1.72rem] font-medium font-kyiv">
              Starter
            </h4>
            <p className="text-[0.94rem] leading-[150%] font-medium">
              Tailored for growing teams, the Growth Plan offers up to 5,000
              queries/month with priority support, detailed analytics, and
              advanced customizations. This plan includes additional
              integrations and is best for scaling projects.
            </p>
          </div>
          <button className="text-[0.94rem]  hover:bg-purple-500 transition-colors duration-500 h-12 rounded-full bg-[#383838]">
            Choose plan
          </button>
        </div>
        <div className="px-10  transition-all duration-500 hover:bg-[#3E2454] pricing_card inline-flex     col-span-12 lg:col-span-4 w-auto rounded-[12px] pt-[51px] pb-[35px]   flex-col gap-y-5">
          <div>
            <h3 className="text-4xl font-bold font-kyiv">
              $100
              <span className="text-base font-sans font-normal">/month</span>
            </h3>
          </div>
          <div className="flex flex-col gap-y-3">
            <h4 className="text-2xl xl:text-[1.72rem] font-medium font-kyiv">
              Custom
            </h4>
            <p className="text-[0.94rem] leading-[150%] font-medium">
              Designed for large organizations with high volumes of customer
              queries. It includes unlimited queries, white-glove support,
              advanced customization options, and dedicated customer success
              managers to help you get the most out of Forgewize. Enterprise
              clients also get access to premium features like custom AI models,
              API access, and in-depth analytics reports that help you measure
              performance and ROI.
            </p>
          </div>
          <button className="text-[0.94rem] hover:bg-purple-500 transition-colors duration-500 h-12 rounded-full bg-[#383838]">
            Choose plan
          </button>
        </div>
      </div>
      <svg
        className=" absolute -z-10 -top-[2%]"
        xmlns="http://www.w3.org/2000/svg"
        width={918}
        height={675}
        viewBox="0 0 918 675"
        fill="none"
      >
        <g filter="url(#filter0_f_7_228)">
          <path
            d="M485.503 473.855C580.598 467.599 642.663 432.496 703.032 350.827C825.327 185.38 110.802 132.823 210.312 314.585C273.055 429.189 364.037 481.846 485.503 473.855Z"
            fill="#4B0082"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_7_228"
            x="0.771362"
            y="0.403885"
            width="916.391"
            height="674.24"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation={100}
              result="effect1_foregroundBlur_7_228"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Pricing;
