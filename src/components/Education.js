import React, { useRef } from "react";
import {motion,useScroll} from 'framer-motion';
import LiIcons from "./LiIcons";
import useLanguage from "./hooks/useLanguage";

const Details = ({type,time,place,info}) => {
    const ref = useRef(null);
    return (<li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
        <LiIcons reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}&nbsp;</h3>
            <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                {time} | {place}
            </span>
            <p className="font-medium w-full md:text-sm">
                {info}
            </p>
        </motion.div>
       </li>
    ) 
}

const Education = () => {
    const [modi,setModi] = useLanguage();
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start end","center start"]
    });
    return(
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
               Education
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div style={{scaleY:scrollYProgress}} 
                className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"/>
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details 
                    type={modi==="en" ? "Bachelor Of Science In experimental science" : "Baccalauréat En Sciences Expérimentales"}
                    time="2019"
                    place={modi==="en" ? "habib thameur college, Tunisia" : "habib thameur collège, Tunisie"}
                    info={modi==="en" ? "Relevant courses included IT, Mathematic, Physics and Science." : 
                    "Les cours pertinents comprenaient l'Informatique, les mathématiques, la physique et les sciences."}
                    />
                    <Details 
                    type={modi==="en" ? "diploma in computer science specializing in software engineering" 
                    : "diplôme en science de l'informatique spécialité génie logiciel"}
                    time="2019-2022"
                    place={modi==="en" ? "UNIVERSITY OF CARTHAGE FSB, Tunisia" : "UNIVERSITÉ DE CARTHAGE FSB, Tunisie"}
                    info=
                    {modi==="en" ? "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence." 
                    : "Les cours pertinents comprenaient les structures de données et les algorithmes, l'ingénierie des systèmes informatiques et l'intelligence artificielle."}
                    />
                    <Details 
                    type={modi==="en" ? "diploma in professional master's degree in computer systems, network system it and virtualization expert" :
                     "Diplôme en master professionel en système informatiques (parcours : Expert système informatique, réseaux et virtualisation)"}
                    time="2022-2024"
                    place={modi==="en" ? "UNIVERSITY OF CARTHAGE FSB, Tunisia" : "UNIVERSITÉ DE CARTHAGE FSB, Tunisie"}
                    info={modi==="en" ? "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, Artificial Intelligence And Network with Cloud Expertise." 
                    :"Les cours pertinents comprenaient les structures et algorithmes de données, l'ingénierie des systèmes informatiques, l'intelligence artificielle et l'expertise en réseau avec le cloud."}
                    />
                </ul>
            </div>
        </div>
    )
}
export default Education ;