import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import Image from 'next/image'
import profilePic from "../../public/images/profile/tunisia.png"
import useLanguage from "./hooks/useLanguage";


const Footer = () => {
    const [modi,setModi] = useLanguage();
    return(
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light
        sm:text-base
        ">
            <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
                <span>{new Date().getFullYear()} &copy; {modi==="en" ? "All Rights Reserved." : "Tous les droits réservés."} </span>
                <div className="flex items-center lg:py-2">
                   {modi==="en" ? "Build With" : "Créer avec"} <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span>
                    {modi==="en" ? "by" : ""} &nbsp;<Link href="/" className="underline underline-offset-2">My.Portfolio</Link>
                </div>
                <span className="flex items-center justify-between underline underline-offset-2">
                    <Image src={profilePic} className='w-5 h-auto'></Image>
                    <Link href={modi==="en" ? "https://en.wikipedia.org/wiki/Tunisia" : "https://fr.wikipedia.org/wiki/Tunisie"} target={"_blank"}>{modi==="en" ? "Tunisia" : "Tunisie"}</Link>
                </span>
            </Layout>
        </footer>
    );
}

export default Footer ;