import React from "react";
import Banner2 from "../../assets/fruit-plate2-BK55XwYa.png";
import { motion } from "framer-motion";
import { FadeUp } from "../../utilites/Animate";
export default function Banner() {
  return (
    <>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 md:py-24 space-y-6 md:space-y-0 py-14">
         
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
                Online
                <br /> 
                Fruit Store

              </motion.h1>
              <motion.p
                variants={FadeUp(0.9)}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt facilis modi aperiam assumenda suscipit ullam sequi
                iusto necessitatibus blanditiis saepe.
              </motion.p>
              <motion.p
              
            variants={FadeUp(1.1)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{once:true}}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt facilis modi aperiam assumenda suscipit ullam sequi
                iusto necessitatibus blanditiis saepe.
              </motion.p>
              {/*Button*/}
              <motion.div
                variants={FadeUp(1.5)}
                initial="hidden"
                animate="visible"
                className="flex justify-center md:justify-start"
              >
                <button className="primary-btn ">
                 
                  Download the App
                </button>
              </motion.div>
            </div>
          </div>
           {/*Banner image*/}
           <div className="flex justify-center items-center">
            <motion.img
            
          initial={{opacity : 0 ,x:200, rotate:75}}
          whileInView={{opacity : 1 , x:0 , rotate:0}}
          transition={{ duration:1 , delay:0.2}}
          viewport={{once:true}}
              src={Banner2}
              className="w-[300px] md:max-w-[400px] drop-shadow h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
