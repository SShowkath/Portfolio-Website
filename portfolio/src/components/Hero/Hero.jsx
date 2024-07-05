import React from "react";
import "./Hero.scss";
import {motion} from "framer-motion";


export default function Hero () {
    return (
        <div id="About" className="hero">
            <div className="hero--wrapper">
                <motion.div className="hero--textContainer"
                initial={{opacity: 0, scale:0.8, x:-50, y:-50}}
                animate={{opacity:1, scale:1, x:0, y:0}}                    
                transition={{duration:1.5}}
                >
                    <div className="hero--title">
                        <h2 className="hero--h1">ABOUT ME</h2>
                        <img className="hero--profile" src="/me.jpg"/>
                    </div>
                    
                    <h1 className="hero--h2">   Solutions-driven student exploring deep learning for CV and multimodal tasks. Research experience in CV, NLP, and Bayesian ML as well as industry software engineering roles.</h1>
                    
                </motion.div>
            </div>

                     
        </div>
    )
}