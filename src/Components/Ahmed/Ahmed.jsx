import React from "react";
import Bannerimage from "../../assets/banner-bg-z4y1lx0D.jpg";
import { motion } from "framer-motion";
import { FadeUp } from "../../utilites/Animate";
export default function Banner() {
  const bgstyles = {
    backgroundImage: `url(${Bannerimage})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <section className="pb-11">
        <div
          style={bgstyles}
          className="container rounded-3xl grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14"
        >
          {/*Banner image*/}
          <div className="flex justify-center items-center"></div>
          {/*Banner image*/}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4 lg:max-w-[400px]:">
              <motion.h1
                variants={FadeUp(0.7)}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
                className="text-3xl lg:text-6xl font-bold uppercase"
              >
                Get Fresh Fruits Today
              </motion.h1>
              <motion.p
                variants={FadeUp(0.9)}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae iusto minima ad ut id eos accusantium aut, aperiam
                quis incidunt!
              </motion.p>
             
              {/*Button*/}
              <motion.div
                variants={FadeUp(1.5)}
                initial="hidden"
                animate="visible"
                className="flex justify-center md:justify-start"
              >
                <button className="primary-btn ">Order Now</button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
