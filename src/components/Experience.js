import React, { useRef } from "react";
import {motion,useScroll} from 'framer-motion';
import LiIcons from "./LiIcons";
import useLanguage from "./hooks/useLanguage";

const Details = ({position,company,companyLink,time,address,work}) => {
    const ref = useRef(null);
    return (<li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
        <LiIcons reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{position}&nbsp;<a href={companyLink}
            target="_blanc" className="text-primary dark:text-primaryDark capitalize">@{company}</a></h3>
            <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                {time} | {address}
            </span>
            <p className="font-medium w-full md:text-sm">
                {work}
            </p>
        </motion.div>
       </li>
    ) 
}

const Experience = () => {
    const [modi,setModi] = useLanguage();
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start end","center start"]
    });
    return(
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
               Experience
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div style={{scaleY:scrollYProgress}} 
                className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"/>
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details 
                    position={modi==="en" ? "S.R.T.B trainee" : "Stagiaire En S.R.T.B"}
                    company="S.R.T.B"
                    companyLink="http://www.srtbizerte.com.tn/index_fr.php"
                    time="2021-2022"
                    address={modi==="en" ? "Regional Transport Company, Tunisia" : "Société Régional De Transport, Tunisie"}
                    work={modi==="en" ? `I carried out an introductory internship at the S.R.T.B company, in addition I completed 
                    an end-of-study project internship in order to carry out the conception UML and development of a social 
                    office management web application to manage the insurance of disease group as well as occupational 
                    medicine with a report developed in Latex.` : `J'ai effectué un stage d'initiation au sein de l'entreprise
                     S.R.T.B, en complément j'ai réalisé un stage projet de fin d'études afin de réaliser la conception UML 
                     et le développement d'une application web de gestion de caisse sociale pour gérer l'assurance maladie 
                     groupe ainsi que médecine du travail avec un rapport développé en Latex.`}
                    />
                    <Details 
                    position={modi==="en" ? "University trainee" : "Université Expérience"}
                    company="FSB"
                    companyLink="http://www.fsb.rnu.tn/"
                    time="2019-2023"
                    address={modi==="en" ? "FSB, Tunisia" : "FSB, Tunisie"}
                    work={modi==="en" ? "I carried out several end-of-year web, desktop and mobile development and conception projects."
                     : "J'ai réalisé plusieurs projets de fin d'année en développement et conception web, desktop et mobile."}
                    />
                </ul>
            </div>
        </div>
    )
}
export default Experience ;