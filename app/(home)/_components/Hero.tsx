import { StarFilledIcon } from "@radix-ui/react-icons";

const Hero = () => {
  return (
    <div className="container max-w-[1200px] flex flex-col items-center justify-center min-h-screen py-10 h-fit gap-y-[56px]">
      <div className="flex items-center justify-center gap-2">
        <div className="inline-flex items-center gap-1">
          <StarFilledIcon className=" w-5 h-5" color="#F9D006" />
          <StarFilledIcon className=" w-5 h-5" color="#F9D006" />
          <StarFilledIcon className=" w-5 h-5" color="#F9D006" />
          <StarFilledIcon className=" w-5 h-5" color="#F9D006" />
          <StarFilledIcon className=" w-5 h-5" color="#F9D006" />
        </div>
        <p className="text-xs font-medium text-[#808080]">
          Based on <span className="text-[#CCCCCC]">10,000+</span> reviews
        </p>
      </div>
      <div>
        <h1 className="xl:text-8xl text-5xl  lg:text-7xl text-center leading-[110%] font-kyiv font-bold -tracking-[2.88px]">
          Elevate Customer Support wit AI-Powered Automation.
        </h1>
      </div>
      <p className="text-sm lg:text-base font-medium leading-[150%] text-center text-[#F7F7F7]">
        Forgewize delivers instant, AI-driven tech support for web3 projects,
        saving time and enhancing efficiency. Start transforming your customer
        support experience with our cutting-edge AI technology that is
        fine-tuned to understand your product documentation and resolve customer
        queries instantly. No more endless backlogs—let Forgewize handle it.
      </p>
      <div className="flex flex-col items-center gap-y-6">
        <button className="py-3 px-6 bg-[#8315DB] rounded-[12px] text-base lg:text-xl -tracking-[0.4px]">
          Start My Free Trial
        </button>
        <ul className="flex items-center gap-6 lg:gap-10">
          <li className="inline-flex items-center gap-3">
            <span className="w-[2px] h-6 bg-white rounded-full"></span>
            <span className="text-base font-semibold">Fast & EffIcient</span>
          </li>
          <li className="inline-flex items-center gap-3">
            <span className="w-[2px] h-6 bg-white rounded-full"></span>
            <span className="text-base font-semibold">
              Multichannel Support
            </span>
          </li>
          <li className="inline-flex items-center gap-3">
            <span className="w-[2px] h-6 bg-white rounded-full"></span>
            <span className="text-base font-semibold">Scalable</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
