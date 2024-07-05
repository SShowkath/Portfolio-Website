import React from "react";
import "./Landing.scss";
import {motion} from "framer-motion";

export default function Landing() {
    const sentence = {
        hidden: {opacity: 1},
        visible: {
            opacity: 1,
            transition: {
                delay: 5,
                staggerChildren: 0.2,
            },
        },
    }
    const letter = {
        hidden: {opacity: 0, y:50},
        visible: {
            opacity: 1,
            y:0,
        },
    }
    return (
        <div id="Home" className="Landing">
            <motion.h1
                variants={sentence}
                initial="hidden"
                animate="visible"
                >
                    {"Hi.".split("").map((char,index) => {
                        return (
                            <motion.span key={char + "-" + index} variants={letter}>
                                {char}
                            </motion.span>
                        )
                    })}
            </motion.h1>
            <motion.h3
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.5}}>
                    {"I'm Shahrukh".split("").map((char,index) => {
                        return (
                            <motion.span key={char + "-" + index} variants={letter}>
                                {char}
                            </motion.span>
                        )
                    })}
            </motion.h3>
            
        </div>
    )
}