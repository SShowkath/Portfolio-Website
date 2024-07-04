import React from "react";
import "./Navbar.scss";
import {motion} from "framer-motion";


export default function Navbar () {
    return (
        <>
            <div className="navbar">
                <nav>
                    <motion.span initial={{opacity:0, scale:0.5}}
                                 animate={{opacity: 1, scale:1}}
                                 transition={{duration:1}}
                                 className="navbar--title">
                                    Shahrukh
                    </motion.span>
                    <motion.div className="socials"
                        initial={{opacity:0, scale:0.5}}
                        animate={{opacity: 1, scale:1}}
                        transition={{duration:1}}
                    >   
                        <a href="https://www.linkedin.com/in/shahrukh-showkath/"><img className="icon" src="/linkedin.png"/></a>
                        <a href="https://github.com/SShowkath/"><img className="icon" src="/github.png"/></a>
                        <a href="mailto:shahrukhshowkath@gmail.com"><img className="icon" src="/email.png"/></a>
                    </motion.div>
                </nav>
            </div>
        </>
    )
}