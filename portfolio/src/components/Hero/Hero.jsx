import React from "react";
import "./Hero.css";
import {motion} from "framer-motion";


export default function Hero () {
    return (
        <div className="hero">
            <div className="hero--wrapper">
                <motion.div className="hero--textContainer"
                initial={{opacity: 0, scale:0.8, x:-50, y:-50}}
                animate={{opacity:1, scale:1, x:0, y:0}}                    
                transition={{duration:1.5}}
                >
                    <h2 className="hero--h2">SHAHRUKH SHOWKATH</h2>
                    <h1 className="hero--h1">Student, Developer, & Researcher</h1>
                    <div className="hero--buttons">
                        <button className="hero--button">Contact Me</button>
                        <button className="hero--button">Projects</button>
                    </div>
                    <div>
                        <motion.img className="hero--scroll" 
                        src="/scroll.png"
                        initial={{opacity: 1, scale:1}}
                        animate={{opacity:0.3, scale:1}}                    
                        transition={{duration:3}}
                        />
                    </div>
                </motion.div>
                
            </div>

            <div className="imageContainer">
                <img className="hero--profile" src="/profile.png"/>
            </div>            
        </div>
    )
}