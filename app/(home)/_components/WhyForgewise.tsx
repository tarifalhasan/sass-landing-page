import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const WhyForgewise = () => {
  const DATA = [
    {
      title: "Instant Query Resolution",
      des: "Forgewize’s AI analyzes your project’s documentation and instantly provides users with accurate, context-specific answers. It minimizes response times and reduces the workload on human support agents.",
      imgSrc: "/card1.png",
      id: 10,
    },
    {
      title: "24/7 Availability",
      des: "Ensure that your customers can get the help they need anytime. Forgewize provides round-the-clock support, responding to queries even when your team is offline.",
      imgSrc: "/card2.png",
      id: 11,
    },
    {
      title: "Customizable Knowledge Base",
      des: "Upload your own product docs, FAQs, and guides. The AI will process and understand these resources, meaning it can answer project-specific questions tailored to your business.",
      imgSrc: "/card3.png",
      id: 12,
    },
    {
      title: "Escalation to Human Support",
      des: "Forgewize intelligently identifies complex questions that require a human touch and escalates them to your team, creating support tickets and keeping communication seamless.",
      imgSrc: "/card4.png",
      id: 13,
    },
    {
      title: "Multi-Language Support",
      des: "Communicate with a global user base by enabling AI-driven responses in multiple languages. Perfect for projects that span different geographical regions.",
      imgSrc: "/card5.png",
      id: 14,
    },
  ];
  return (
    <section className="container py-16">
      <div className="flex items-center justify-between gap-6 flex-wrap">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold font-kyiv -tracking-[0.96px] leading-[100%] lg:text-5xl">
            Why Forgewise?
          </h2>
          <p className="text-sm lg:text-base font-medium text-[#F7F7F7]">
            Supercharge your customer support with the best AI-powered chat
            solution for web3 projects.
          </p>
        </div>
        <div>
          <button className="btn_outlined">Request a Demo</button>
        </div>
      </div>
      <div className=" pt-10 xl:pt-16">
        <Carousel
          opts={{
            align: "end",
          }}
        >
          <CarouselContent>
            {DATA.map((item) => (
              <CarouselItem
                className=" basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                key={item.title}
              >
                <div className="py-5 cursor-pointer transition-all duration-300 group hover:bg-[#AB49FF8F]/[0.56] h-full rounded-3xl bg-[#111218] px-4 flex flex-col gap-y-5">
                  <Image
                    src={item.imgSrc}
                    alt={item.title}
                    width={300}
                    className=" max-h-[206px] object-cover"
                    height={206}
                  />
                  <div className="space-y-1">
                    <h3 className="text-lg group-hover:text-white text-[#C8C9D0] leading-[140%] font-normal">
                      {item.title}
                    </h3>
                    <p className="text-sm group-hover:text-white text-[#868898] leading-[140%] font-medium">
                      {item.des}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex gap-3 pt-8">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default WhyForgewise;
