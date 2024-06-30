import React from "react";
import "./Hero.css";
import {motion} from "framer-motion";


export default function Hero () {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer"
                initial={{opacity: 0, scale:0.8, x:-50, y:-50}}
                animate={{opacity:1, scale:1, x:0, y:0}}                    
                transition={{duration:1.5}}
                >
                    <h2>SHAHRUKH SHOWKATH</h2>
                    <h1>Student, Developer, & Researcher</h1>
                    <div className="buttons">
                        <button>Contact Me</button>
                        <button>Projects</button>
                    </div>
                    <div>
                        <motion.img className="scroll" 
                        src="/scroll.png"
                        initial={{opacity: 1, scale:1}}
                        animate={{opacity:0.3, scale:1}}                    
                        transition={{duration:3}}
                        />
                    </div>
                </motion.div>
                
            </div>

            <div className="imageContainer">
                <img className="profile" src="/profile.png"/>
            </div>            
        </div>
    )
}