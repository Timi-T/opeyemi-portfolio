import { slideWords } from "@/config";
import { Button } from "./Button";
import { HeroModel } from "./3D/HeroModel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TechStack from "./TechStack";

export const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".title-1, .title-2, .title-3",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" }
    );
  });
  return (
    <section
      id="hero"
      className="h-screen relative overflow-hidden bg-gradient-to-brfrom-blackvia-cyan-950/50to-black flex flex-col justify-between pb-10"
    >
      {/* Hero layout */}
      <div className="h-full flex items-center justify-between">
        {/* Left side */}
        <div className="h-full">
          <header className="h-full flex flex-col justify-center w-screen md:w-full px-5 md:px-20">
            <div className="flex flex-col gap-6">
              <div className="text-3xl md:text-5xl xl:text-6xl font-medium">
                <h2 className="overflow-hidden flex gap-2 inline-block py-1 title-1">
                  Delivering
                  <span className="text-slide h-9 md:h-12 xl:h-16">
                    <span className="wrapper">
                      {slideWords.map((word) => (
                        <span
                          key={word.title}
                          className="flex items-center gap-1 md:gap-3 pb-2"
                        >
                          {/* <div className="w-6 h-6 md:h-8 md:w-8 rounded-full bg-cyan-200 flex items-center justify-center">
                            {word.icon}
                          </div> */}
                          <span className="font-rebond text-cyan-300">
                            {word.title}
                          </span>
                        </span>
                      ))}
                    </span>
                  </span>
                </h2>
                <h2 className="py-1 title-2">frontend solutions</h2>
                <h2 className="py-1 title-3">engineered for complexity</h2>
              </div>
              <p className="text-neutral-300 text-lg">
                Creating pixel perfect & seamless user interfaces on the web{" "}
                <span className="text-2xl">🎨</span>
              </p>

              <Button
                type="button"
                className="bg-gradient-to-br from-white via-cyan-300 to-purple-300 w-max h-10 md:h-14 px-20 rounded-xl text-black xl:text-lg font-medium"
              >
                View blog
              </Button>
            </div>
          </header>
        </div>

        {/* right side */}
        <figure className="w-full xl:flex-1">
          <div className="absolute w-[70%] h-full xl:min-h-[50vh] top-1/2 -translate-y-1/2 flex items-centerjustify-center">
            <div className="mt-40 w-full h-full pr-96">
              <HeroModel />
            </div>
          </div>
        </figure>
      </div>

      <TechStack />
    </section>
  );
};
