import React from "react";
import "./Hero.scss";
import {motion, useInView} from "framer-motion";


export default function Hero () {
    return (
        <div id="About" className="hero">
            <div className="hero--wrapper">
                <motion.div className="hero--textContainer"
                
                >
                    <div className="hero--title">
                        <motion.h2 className="hero--h1"
                        initial={{opacity: 0, }}
                        whileInView={{
                            opacity: 1,
                            scale: [1, 1,1,1,2,1,1,1],
                            x: 0, 
                          }}
                        transition={{duration:1.5}}
                        >ABOUT ME
                        </motion.h2>
                        <motion.img 
                        initial={{opacity: .5, x:200}}
                        whileInView={{
                            opacity: 1,
                            x: 0, 
                          }}                    
                        transition={{duration:1}}
                        className="hero--profile" src="/me.jpg"/>
                    </div>
                    <motion.div className="text"
                        initial={{opacity: 0, y:200}}
                        whileInView={{
                            opacity: [0,1],
                            y: 0, 
                          }}     
                                     
                        transition={{duration:1, delay:1.25}}
                    >
                        <h1 className="hero--h2">
                            I'm a current Master's student at Cornell studying computer science. I have been programming for over
                            5 years and have experience in CV, NLP, and Bayesian ML research
                            as well as industry software engineering projects.
                        </h1>
                        <br/>
                        <h1 className="hero--h2">I like to unwind by staying active, reading sci-fi, gaming, watching
                            thought-provoking films, and eating the spiciest cuisines. 
                        </h1>
                        <br/>
                        <h1 className="hero--h2">
                            Inspired by <a href="https://www.youtube.com/user/penguinz0" target="_blank" rel="noopener noreferrer">MoistCr1TiKaL's</a> "Moist Meter",
                            I've started rating movies I've watched. You can check out my ratings <a href="https://letterboxd.com/shahrukh0/" target="_blank" rel="noopener noreferrer">here</a>.
                        </h1>
                    </motion.div>
                    
                </motion.div>
            </div>

                     
        </div>
    )
}