import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/uu33.png"
import lightBuld from "../../public/images/svgs/miscellaneous_icons_1.svg"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import ContactForm from '@/components/ContactForm'
import {motion} from "framer-motion";
import TransitionEffect from '@/components/TransitionEffect'
import { useState } from 'react'
import { useRouter } from 'next/router'
import useLanguage from '@/components/hooks/useLanguage'

const CustomMobileLink = ({href,title, className=""}) => {
  const router = useRouter();

  return(
      <Link href={href} target={'_blank'} className={`${className} font-medium relative group text-light dark:text-dark my-2`}>
          {title}
          <span className={`
           h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full
           transition-[width] ease duration-300
           dark:bg-dark`}>
           </span>
      </Link>
  )
}

export default function Home() {
  const [modi,setModi] = useLanguage();
  const quoteVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };
  const [isOpen,setIsOpen] = useState(false);

  const handleClick = () => {
      setIsOpen(!isOpen);
  }
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Head>
        <title>MH My.Portfolio | {modi==="en" ? "Home Page" : "Page d'Accueil"}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className="flex items-center justify-between w-full lg:flex-col">
            <motion.div className='w-[37%] md:w-[70%]'
            variants={quoteVariants}
            initial="initial"
            animate="animate">
               <Image src={profilePic} alt='My.Portfolio' className='w-full h-auto lg:hidden md:inline-block md:w-full'
               priority
               sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,50vw'
               />
            </motion.div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text={modi==="en" ? "Turning Vision Into Reality With Code And Design." : "Transformer la vision en réalité avec le code et la conception."} className='!text-6xl !text-left xl:!text-5xl
              lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl
              ' />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                {modi==="en" ? 
                "As a skilled full-stack developer, I'm dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in web development and others." : 
                "En tant que développeur full-stack qualifié, je me consacre à transformer des idées en applications Web innovantes. Explorez mes derniers projets et articles, mettant en valeur mon expertise en développement Web et autres."}
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>

                <Link href="" className='flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent 
                hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light md:p-2 md:px-4 md:text-base' 
                download={true} onClick={handleClick}>CV<LinkArrow className={"w-6 ml-1"} /></Link>

{
                isOpen ?


                <motion.div 
                initial={{scale:0,opacity:0,x:"-50%",y:"-50%"}}
                animate={{scale:1,opacity:1}}
                className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
                ">
                <motion.button
                  onClick={togglePopup}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 1 }}
                  className="absolute rounded-full w-6 h-6 bg-light dark:bg-dark  top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-light"
                >
                  X
                </motion.button>
                    <div className="flex items-center flex-col justify-center">
                        <CustomMobileLink href="" className='!font-bold' title={modi==="en" ? "Download :" : "Télécharger :"} />
                        <CustomMobileLink href="/mayssam hedhli cv Fr.pdf" className='' title={modi==="en" ? "CV in Fr" : "CV en Fr"} />
                        <CustomMobileLink href="/mayssam hedhli Lettre de Motivation.pdf" className='' title={modi==="en" ? "Motivation Letter in Fr" : "Lettre De Motivation en Fr"}  />
                        <CustomMobileLink href="/mayssam hedhli cv - En.pdf" className='' title={modi==="en" ? "CV in En" : "CV en En"} />
                        <CustomMobileLink href="/mayssam hedhli Lettre de Motivation - Copie.pdf" className='' title={modi==="en" ? "Motivation Letter in En" : "Lettre De Motivation en En"}  />
                    </div>
    
                </motion.div>


                : null
            }


                <ContactForm />
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBuld} alt='My.Portfolio' className='w-full h-auto'></Image>
        </div>
      </main>
    </>
  )
}
