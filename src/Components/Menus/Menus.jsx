import React from "react";
import logo1 from '../../assets/cherry-K8SpylM9.png'
import logo2 from '../../assets/avocado-CLmYh0bp.png'
import logo3 from '../../assets/apple-dU8UKi7U.png'
import logo4 from '../../assets/orange-SYYSet8r.png'
import { delay, motion } from "framer-motion";
import { FadeLeft } from "../../utilites/Animate";
import { AnimatePresence } from "framer-motion";

const MenusData = [
  {
    id: 1,
    title: "Fresh Cherries",
    link: "/",
    price: "$2.00",
    img:logo1,
    delay:0.3,
  },
  {
    id: 2,
    title: "Fresh Avocado",
    link: "/",
    price: "$4.00",
    img:logo2,
    delay:0.6,

  },
  {
    id: 3,
    title: "Fresh Red Apples",
    link: "/",
    price: "$4.00",
    img:logo3,
    delay:0.9,

  },
  {
    id: 4,
    title: "Fresh Oranges",
    link: "/",
    price: "$3.00",
    img:logo4,
    delay:1.2,

  },
];
export default function Menus() {
  return <>
      <section>
        <div className="container pt-12 pb-20">
          <motion.h1
          initial={{opacity : 0 , x:-200}}
          whileInView={{opacity : 1 , x:0}}
          transition={{  duration: 1 , delay :0.3}}
          className="text-2xl font-bold text-left pb-10 uppercase">Our Menu</motion.h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {MenusData.map((menu)=> (
            <motion.div
            variants={FadeLeft(menu.delay)}
            initial="hidden"
            whileHover={{scale:1.1}}
            whileInView={"visible"}
            className="bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center gap-3 ">
               <img src={menu.img} className="w-[60px]  mb-4 scale-110 transform-translate-y-6" alt="" /> 
               <div>
                <h1 className="text-lg font-semibold">{menu.title}</h1>
                <h1 className="text-lg font-semibold text-secondary">{menu.price}</h1>
               </div>
            </motion.div>
            ))}
          </div>
        </div>
      </section>
  
  
  </>
}
