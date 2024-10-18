import Footer from "@/components/Footer";
import Hero from "./_components/Hero";
import Pricing from "./_components/Pricing";
import SeeForgewizeinAction from "./_components/SeeForgewizeinAction";
import WhyForgewise from "./_components/WhyForgewise";

export default function Home() {
  return (
    <div className=" relative overflow-hidden">
      <Hero />
      <WhyForgewise />
      <SeeForgewizeinAction />
      <Pricing />
      <Footer />
      <div className="w-[955.716px] rounded-full blur-[150px] h-[527.459px] bg-[#9825F88F]/[0.56] absolute -z-10 top-[400px] left-[40%] -translate-x-[40%] -rotate-[6.481deg]"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={773}
        height={676}
        viewBox="0 0 773 676"
        fill="none"
        className=" absolute -z-10 left-[15%] -translate-x-[15%] top-[700px]"
      >
        <g filter="url(#filter0_f_3_12)">
          <path
            d="M287.569 201.694C192.474 207.95 130.409 243.052 70.0399 324.722C-52.2559 490.169 662.27 542.726 562.76 360.964C500.017 246.359 409.035 193.702 287.569 201.694Z"
            fill="#4B0082"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_3_12"
            x="-144.091"
            y="0.904419"
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
              result="effect1_foregroundBlur_3_12"
            />
          </filter>
        </defs>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={883}
        height={1402}
        viewBox="0 0 883 1402"
        fill="none"
        className=" absolute top-[50px] right-0 -z-10"
      >
        <g filter="url(#filter0_f_3_10)">
          <path
            d="M599.31 854.222C642.845 792.542 645.333 745.464 667.057 673.16C708.991 533.591 678.106 441.933 727.948 304.988C829.648 25.5594 1005.51 905.146 755.37 1065.93C598.122 1167.01 137.992 1191.24 276.705 1065.93C332.102 1015.89 385.123 1021.17 447.685 980.441C512.252 938.406 554.882 917.167 599.31 854.222Z"
            fill="url(#paint0_linear_3_10)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_3_10"
            x="0.982422"
            y="0.567871"
            width="1132.46"
            height="1400.5"
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
              stdDeviation={125}
              result="effect1_foregroundBlur_3_10"
            />
          </filter>
          <linearGradient
            id="paint0_linear_3_10"
            x1="685.203"
            y1="561.055"
            x2="526.32"
            y2="1021.57"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2F2F2F" />
            <stop offset={1} stopColor="#696969" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        width={487}
        height={901}
        className=" absolute bottom-0 right-0 -z-10"
        viewBox="0 0 487 901"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M552 0C405.601 -1.7458e-06 265.197 58.157 161.677 161.677C58.157 265.197 1.27987e-05 405.6 0 552C-1.27986e-05 698.399 58.1569 838.803 161.677 942.323C265.197 1045.84 405.6 1104 552 1104L552 728.64C505.152 728.64 460.223 710.03 427.097 676.903C393.97 643.777 375.36 598.848 375.36 552C375.36 505.152 393.97 460.223 427.097 427.097C460.223 393.97 505.152 375.36 552 375.36V0Z"
          fill="#BB6BD9"
        />
      </svg>

      <div className=" w-[955.716px]  -z-10 rotate-[173.519deg] absolute -left-[10%] bottom-[30%] lg:bottom-[12%] h-[527px] blur-[150px] rounded-full bg-[#AB49FF]"></div>
    </div>
  );
}
