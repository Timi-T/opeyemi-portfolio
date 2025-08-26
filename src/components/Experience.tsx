import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experienceCards } from "@/config";
import { TitleHeader } from "./TitleHeader";
import { Link } from "react-router-dom";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    // Loop through each timeline card and animate them in
    // as the user scrolls to each card
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      // Animate the card coming in from the left
      // and fade in
      gsap.from(card, {
        // Move the card in from the left
        xPercent: -100,
        // Make the card invisible at the start
        opacity: 0,
        // Set the origin of the animation to the left side of the card
        transformOrigin: "left left",
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the card is 80% of the way down the screen
        scrollTrigger: {
          // The card is the trigger element
          trigger: card,
          // Trigger the animation when the card is 80% down the screen
          start: "top 80%",
        },
      });
    });

    // Animate the timeline height as the user scrolls
    // from the top of the timeline to 70% down the screen
    // The timeline height should scale down from 1 to 0
    // as the user scrolls up the screen
    gsap.to(".timeline", {
      // Set the origin of the animation to the bottom of the timeline
      transformOrigin: "bottom bottom",
      // Animate the timeline height over 1 second
      ease: "power1.inOut",
      // Trigger the animation when the timeline is at the top of the screen
      // and end it when the timeline is at 70% down the screen
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        // Update the animation as the user scrolls
        onUpdate: (self) => {
          // Scale the timeline height as the user scrolls
          // from 1 to 0 as the user scrolls up the screen
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    // Loop through each expText element and animate them in
    // as the user scrolls to each text element
    gsap.utils.toArray(".expText").forEach((text) => {
      // Animate the text opacity from 0 to 1
      // and move it from the left to its final position
      // over 1 second with a power2 ease-in-out curve
      gsap.from(text, {
        // Set the opacity of the text to 0
        opacity: 0,
        // Move the text from the left to its final position
        // (xPercent: 0 means the text is at its final position)
        xPercent: 0,
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the text is 60% down the screen
        scrollTrigger: {
          // The text is the trigger element
          trigger: text,
          // Trigger the animation when the text is 60% down the screen
          start: "top 60%",
        },
      });
    }, "<"); // position parameter - insert at the start of the animation
  }, []);

  return (
    <section
      id="experience"
      className="flex-center py-20 md:py-32 pt-20 xl:px-0 bg-cyan-50 text-neutral-950"
    >
      <div className="w-full h-full md:px-20 px-3">
        <TitleHeader
          title="💼 Professional Work Experience"
          sub="💼  My Career Overview"
          className="text-neutral-950"
        />
        <div className="mt-20 md:mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-8">
            {experienceCards.map((card, idx) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-3/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo shadow-xl border">
                        <Link to={card.website}>
                          <img src={card.logoPath} alt="logo" className="p-3 rounded-full" />
                        </Link>
                      </div>
                      <div>
                        <h1 className="font-semibold text-xl md:text-3xl">{card.title}</h1>
                        <p className="my-1 md:my-5 text-white-50">
                          🗓️&nbsp;{card.date}
                        </p>
                        <p className="text-cyan-800 italic">
                          Responsibilities
                        </p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map(
                            (responsibility, index) => (
                              <li key={index} className="text-sm md:text-lg">
                                {responsibility}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden xl:flex xl:w-1/3 flex flex-col gap-6 justify-center">
                  {/* Key Achievements */}
                  <div className={clsx("backdrop-blur-lg p-7 2xl:p-10 bg-gradient-to-br from-black via-cyan-950 to-black rounded-2xl shadow-sm border text-neutral-50")}>

                    <h3 className="text-base font-semibold text-neutral-50">Duration</h3>
                    <p>{card.duration}</p>
                    <h3 className="text-base mt-6 font-semibold text-neutral-50 mb-2">Key Achievements</h3>
                    <ul className="text-sm space-y-2">
                      {
                        card.impact.map((impact) => {
                          return <li>{impact}</li>
                        })
                      }
                    </ul>

                    {/* Tech Stack */}
                    <div className="mt-12">
                      <h3 className="text-sm font-semibold text-neutral-50 mb-2">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {card.tech.map((tech) => (
                          <span key={tech} className="px-3 py-1 text-xs bg-neutral-100 text-neutral-700 rounded-full shadow-sm border">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
