import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <>
      <footer className="bg-primary/10 text-white py-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="container flex justify-between items-center"
        >
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <p className="text-primary">Fruit</p>
            <p className="text-secondary">Store</p>
            <FaLeaf className="text-green-500" />
          </div>
          <div className="text-3xl mt-4 text-gray-700 flex  gap-4">
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
          </div>
        </motion.div>
      </footer>
    </>
  );
}
