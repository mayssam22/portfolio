import React, { useState } from "react";
import { CircularText } from "./Icons";
import Link from "next/link";
import ContactPopup from "./ContactPopup";
import useLanguage from "./hooks/useLanguage";

const HireMe = () => {
    const [modi,setModi] = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
      setIsOpen(!isOpen);
    };
    return (
        <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden 
        md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0">
            <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
                <CircularText className='fill-dark animate-spin-slow dark:fill-light'/>
                <Link href="" className="flex items-center justify-center absolute left-1/10 top-1/9 translate-x-1/10 translate-y-1/9
                bg-dark text-light shadow-md border bottom-solid border-dark w-[40%] h-[40%] rounded-full font-semibold hover:bg-light
                hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light md:w-12 md:h-12 md:text-[10px] " onClick={togglePopup}>
                    {modi==="en" ? "Hire Me" : "Con. moi"}
                </Link>
                <ContactPopup isOpen={isOpen} onClose={togglePopup} />
            </div>
        </div>
    );
}

export default HireMe ;