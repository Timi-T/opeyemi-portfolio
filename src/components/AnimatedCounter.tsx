import { counterItems } from "@/config";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

export const AnimatedCounter = () => {
  return (
    <div id="counter" className="px-5 md:px-20 pt-32">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-8 xl:px-40">
        {counterItems.map((item) => (
          <div className="bg-neutral-900/100 p-10 rounded-xl">
            <Link
              key={item.label}
              to={item.href}
              className="counter-number text-white text-3xl md:text-5xl xl:text-6xl font-bold mb-0"
            >
              <CountUp
                scrollSpyDelay={3}
                enableScrollSpy
                end={item.value}
                suffix={item.suffix}
                prefix={item.prefix}
              />
            </Link>
            <div>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
