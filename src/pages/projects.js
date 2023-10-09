import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import ImageModal from "@/components/ImageModal";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/crypto-screener-cover-image.JPG";
import project2 from "../../public/images/projects/devdreaming.JPG";
import project3 from "../../public/images/projects/proj srtb/act1.png";
import project4 from "../../public/images/projects/proj srtb/act2.png";
import project5 from "../../public/images/projects/proj srtb/auth1.png";
import project6 from "../../public/images/projects/proj srtb/auth2.png";
import project7 from "../../public/images/projects/proj srtb/auth3.png";
import project8 from "../../public/images/projects/proj srtb/auth4.png";
import project9 from "../../public/images/projects/proj srtb/auth5.png";
import project10 from "../../public/images/projects/proj srtb/auth6.png";
import project11 from "../../public/images/projects/proj srtb/bordEnv1.png";
import project12 from "../../public/images/projects/proj srtb/bordEnv2.png";
import project13 from "../../public/images/projects/proj srtb/bordEnv3.png";
import project14 from "../../public/images/projects/proj srtb/bordEnv4.png";
import project15 from "../../public/images/projects/proj srtb/bordEnv5.png";
import project16 from "../../public/images/projects/proj srtb/bordEnv6.png";
import project17 from "../../public/images/projects/proj srtb/bordEnv7.png";
import project18 from "../../public/images/projects/proj srtb/bordReg1.png";
import project19 from "../../public/images/projects/proj srtb/bordReg2.png";
import project20 from "../../public/images/projects/proj srtb/bordReg3.png";
import project21 from "../../public/images/projects/proj srtb/bordReg4.png";
import project22 from "../../public/images/projects/proj srtb/bordReg5.png";
import project23 from "../../public/images/projects/proj srtb/bordReg6.png";
import project24 from "../../public/images/projects/proj srtb/bordReg7.png";
import project25 from "../../public/images/projects/proj srtb/bordReg8.png";
import project26 from "../../public/images/projects/proj srtb/imprAct1.png";
import project27 from "../../public/images/projects/proj srtb/med1.png";
import project28 from "../../public/images/projects/proj srtb/med2.png";
import project29 from "../../public/images/projects/proj srtb/dash1.png";
import project30 from "../../public/images/projects/proj srtb/pha1.png";
import project31 from "../../public/images/projects/proj srtb/pha2.png";
import project32 from "../../public/images/projects/proj srtb/pra1.png";
import project33 from "../../public/images/projects/proj srtb/pra2.png";
import project34 from "../../public/images/projects/proj srtb/vis1.png";
import project35 from "../../public/images/projects/proj srtb/vis2.png";
import project36 from "../../public/images/projects/proj srtb/vis3.png";
import project37 from "../../public/images/projects/proj srtb/vis4.png";
import project38 from "../../public/images/projects/proj srtb/vis5.png";
import project39 from "../../public/images/projects/proj srtb/vis6.png";
import project40 from "../../public/images/projects/dailyNote/1.png";
import project41 from "../../public/images/projects/dailyNote/2.png";
import project42 from "../../public/images/projects/dailyNote/4.png";
import project43 from "../../public/images/projects/dailyNote/6.png";
import project88 from "../../public/images/projects/dailyNote/88.png";
import project44 from "../../public/images/projects/games/23.png";
import project45 from "../../public/images/projects/games/24.png";
import project46 from "../../public/images/projects/games/3.png";
import project47 from "../../public/images/projects/games/4.png";
import project48 from "../../public/images/projects/games/22.png";

import pro1 from "../../public/images/projects/me/1.jpg";
import pro2 from "../../public/images/projects/me/2.jpg";
import pro3 from "../../public/images/projects/me/3.jpg";
import pro4 from "../../public/images/projects/me/4.jpg";
import pro5 from "../../public/images/projects/me/5.jpg";
import pro6 from "../../public/images/projects/me/6.jpg";
import pro7 from "../../public/images/projects/me/7.jpg";
import pro8 from "../../public/images/projects/me/8.jpg";
import pro9 from "../../public/images/projects/me/9.jpg";
import pro10 from "../../public/images/projects/me/10.jpg";
import pro11 from "../../public/images/projects/me/11.jpg";
import pro12 from "../../public/images/projects/me/12.png";
import pro14 from "../../public/images/projects/me/14.png";
import pro15 from "../../public/images/projects/me/15.png";
import pro16 from "../../public/images/projects/me/16.png";
import pro17 from "../../public/images/projects/me/17.png";
import pro18 from "../../public/images/projects/me/18.png";
import pro19 from "../../public/images/projects/me/19.png";
import pro20 from "../../public/images/projects/me/20.png";
import pro21 from "../../public/images/projects/me/21.png";

import pro0 from "../../public/images/projects/biblio/0.png";
import pro1111 from "../../public/images/projects/biblio/1.png";
import pro211 from "../../public/images/projects/biblio/2.png";
import pro31 from "../../public/images/projects/biblio/3.png";
import pro41 from "../../public/images/projects/biblio/4.png";
import pro51 from "../../public/images/projects/biblio/5.png";
import pro61 from "../../public/images/projects/biblio/6.png";
import pro71 from "../../public/images/projects/biblio/7.png";
import pro81 from "../../public/images/projects/biblio/8.png";

import pro811 from "../../public/images/projects/portada.jpg";
import { useEffect } from 'react';
import { useState } from 'react';
import {motion} from 'framer-motion';
import TransitionEffect from "@/components/TransitionEffect";
import useLanguage from "@/components/hooks/useLanguage";

const FramerImage = motion(Image);

const LikeButton = ({ userID, projectID }) => {
  const [modi,setModi] = useLanguage();
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = async () => {
    try {
      const response = await fetch('/api/process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userID, projectID }),
      });

      if (response.ok) {
        setIsLiked(true);
        handleLike();
      }
    } catch (error) {
      console.error('Error liking project:', error);
    }
  };

  const handleLikeClick2 = async () => {
    try {
      const response = await fetch('/api/exist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userID, projectID }),
      });

      if (response.ok) {
        const data = await response.json();
        setIsLiked(data.likeExists);
      }
    } catch (error) {
      console.error('Error liking project:', error);
    }
  };



  useEffect(() => {
    let storedUserID = localStorage.getItem('userID');
    if (!storedUserID) {
      setIsLiked(false);
    } else {
      handleLikeClick2()
    }
  }, [userID, projectID]);

  console.log(isLiked);

  const handleLike = () => {
    // Increment the like count when the like button is clicked
    setLikeCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    // Fetch the initial like count for the project when the component mounts
    const fetchLikeCount = async () => {
      try {
        const response = await fetch(`/api/number?projectID=${projectID}`);
        if (response.ok) {
          const data = await response.json();
          setLikeCount(data.likeCount);
        } else {
          console.error('Error fetching like count:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching like count:', error);
      }
    };

    fetchLikeCount();
  }, [projectID]);

  return (
    <motion.button
    whileHover={isLiked ? '' : {scale:1.05}}
      onClick={handleLikeClick}
      className={`${
        isLiked
          ? 'border border-primary text-primary cursor-not-allowed dark:text-primaryDark dark:border-primaryDark'
          : 'border border-primary text-primary dark:border-primaryDark dark:text-primaryDark'
      } transition-colors duration-300 ease-in-out px-4 py-2 rounded flex items-center space-x-2 sm:px-4 sm:text-base`}
    >
      <motion.i
        className={`${
          isLiked
            ? 'fas fa-heart'
            : 'far fa-heart'
        }`}
      /> <span className="mr-4"></span>{modi==="en" ? "Likes" : "J'adore" } : +{likeCount}
    </motion.button>
  );
};


const LikesVery = ({ projectID }) => {
  const [userID1, setUserID1] = useState('hello');

  useEffect(() => {
    let storedUserID = localStorage.getItem('userID');
    if (!storedUserID) {
      const str = String(Math.random().toString(36).substring(2, 10));
      localStorage.setItem('userID', JSON.stringify(str));
      storedUserID = str; // Update storedUserID with the non-JSON string
    }
    setUserID1(storedUserID);
  }, []);

  console.log(userID1);

  return (
    <LikeButton userID={userID1} projectID={projectID} />
  );
};




const FeaturedProject = ({type,title,summary,img,link,github}) => {
  const [modi,setModi] = useLanguage();
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [project5,project6,project3, project4,project7,project8,project9,project10,project11,project12,project13,
    project14,project15,project16,project17,project18,project19,project20,project21,project22,project23,project24,
    project25,project26,project27,project28,project29,project30,project31,project32,project33,project34,project35,project36,
    project37,project38,project39]; // Replace with your image URLs

  const openImageModal = (index) => {
    setCurrentImageIndex(index);
    setImageModalOpen(true);
  };

  const closeImageModal = () => {
    setCurrentImageIndex(0); // Reset to the first image when closing
    setImageModalOpen(false);
  };

  const handleNext = () => {
    // Update the current image index for the next image
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const handlePrev = () => {
    // Update the current image index for the previous image
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
  };
    return(
        <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light
        shadow-2xl p-12 relative rounded-br-2xl dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light
             xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"/>
              {/* Display the first image */}
              <Link href="" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
              <FramerImage
                src={images[0]}
                alt={`Image ${currentImageIndex + 1}`}
                onClick={() => openImageModal(currentImageIndex)}
                className="w-full h-auto" whileHover={{scale:1.05}} 
                transition={{duration:0.2}}
                priority
                sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,50vw'
              />
              </Link>

              {/* Image Modal */}
              {isImageModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="absolute inset-0 bg-black opacity-75" onClick={closeImageModal} />
                  <div className="relative">
                  <div className="flex items-center justify-center w-screen h-screen">
                    {/* Center the image within a flex container */}
                    <Image 
                      src={images[currentImageIndex]}
                      alt={`Image ${currentImageIndex + 1}`}
                      className="h-[70%] w-auto mx-auto xs:h-auto" />
                  </div>
                    <button
                      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-4"
                      onClick={handlePrev}
                    >
                          <motion.i whileHover={{scale:2}} className="fas fa-arrow-left text-dark" />
                    </button>
                    <button
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-4"
                      onClick={handleNext}
                    >
                            <motion.i whileHover={{scale:2}} className="fas fa-arrow-right text-dark" />
                    </button>
                    <button
                    whileHover={{scale:1.05}}
                       className="absolute top-4 right-4 bg-red-500 text-light rounded-full p-4"
                       onClick={closeImageModal}
                    >
                      <motion.i whileHover={{scale:2}} className="fas fa-times" />
                    </button>
                  </div>
                </div>
              )}
            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">{type}</span>
                <Link href={link} target="_blanc" className="hover:unerline underline-offset-2">
                   <h2 className="w-full my-2 text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
                {/*<div className="mt-2 flex items-center"> */}
                   {/* <Link href={github} target="_blanc" className="w-10"><GithubIcon /></Link>*/}
                    {/*<Link href={link} target="_blanc" className=" ml-4 rounded-lg bg-dark text-light
                    p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent 
                    hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                     hover:dark:border-light sm:px-4 sm:text-base">{modi==="en" ? "Visit The Project" : "Visiter Le Projet"}</Link>*/}
                     <p className="text-primary my-2 font-medium dark:text-primaryDark sm:text-sm mt-8">{modi=="en" ? "Project progress" : "Progrés du projet"} : 100%</p>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div class="bg-primary dark:bg-primaryDark h-2.5 rounded-full" style={{ width: `100%`}}></div>
                    </div>
                <br/>
                <LikesVery className="text-primary mt-8" projectID={title}/>
            </div>
        </article>
    )
}







const FeaturedProject1 = ({type,title,summary,img,link,github}) => {
  const [modi,setModi] = useLanguage();
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [pro1,pro2,pro3, pro4,pro5,pro6,pro7,pro8,pro9,pro10,pro11,pro12,
    pro14,pro15,pro16,pro17,pro18,pro19,pro20,pro21]; // Replace with your image URLs

  const openImageModal = (index) => {
    setCurrentImageIndex(index);
    setImageModalOpen(true);
  };

  const closeImageModal = () => {
    setCurrentImageIndex(0); // Reset to the first image when closing
    setImageModalOpen(false);
  };

  const handleNext = () => {
    // Update the current image index for the next image
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const handlePrev = () => {
    // Update the current image index for the previous image
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
  };
    return(
        <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light
        shadow-2xl p-12 relative rounded-br-2xl dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light
             xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"/>
              {/* Display the first image */}
              <Link href="" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
              <FramerImage
                src={images[0]}
                alt={`Image ${currentImageIndex + 1}`}
                onClick={() => openImageModal(currentImageIndex)}
                className="w-full h-auto" whileHover={{scale:1.05}} 
                transition={{duration:0.2}}
                priority
                sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,50vw'
              />
              </Link>

              {/* Image Modal */}
              {isImageModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="absolute inset-0 bg-black opacity-75" onClick={closeImageModal} />
                  <div className="relative">
                  <div className="flex items-center justify-center w-screen h-screen">
                    {/* Center the image within a flex container */}
                    <Image 
                      src={images[currentImageIndex]}
                      alt={`Image ${currentImageIndex + 1}`}
                      className="h-[70%] w-auto mx-auto xs:h-auto" />
                  </div>
                    <button
                      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-4"
                      onClick={handlePrev}
                    >
                          <motion.i whileHover={{scale:2}} className="fas fa-arrow-left text-dark" />
                    </button>
                    <button
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-4"
                      onClick={handleNext}
                    >
                            <motion.i whileHover={{scale:2}} className="fas fa-arrow-right text-dark" />
                    </button>
                    <button
                    whileHover={{scale:1.05}}
                       className="absolute top-4 right-4 bg-red-500 text-light rounded-full p-4"
                       onClick={closeImageModal}
                    >
                      <motion.i whileHover={{scale:2}} className="fas fa-times" />
                    </button>
                  </div>
                </div>
              )}
            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">{type}</span>
                <Link href={link} target="_blanc" className="hover:unerline underline-offset-2">
                   <h2 className="w-full my-2 text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
               {/* <div className="mt-2 flex items-center"> 
                    <Link href={github} target="_blanc" className="w-10"><GithubIcon /></Link>
                    <Link href={link} target="_blanc" className=" ml-4 rounded-lg bg-dark text-light
                    p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent 
                    hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                     hover:dark:border-light sm:px-4 sm:text-base">{modi==="en" ? "Visit The Project" : "Visiter Le Projet"}</Link>*/} 
                    <p className="text-primary my-2 font-medium dark:text-primaryDark sm:text-sm mt-8">{modi=="en" ? "Project progress" : "Progrés du projet"} : 80%</p>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div class="bg-primary dark:bg-primaryDark h-2.5 rounded-full" style={{ width: `80%`}}></div>
                    </div>
                <br/>
                <LikesVery className="text-primary mt-8" projectID={title}/>
            </div>
        </article>
    )
}






const Projects = ({title,type,img,link,github}) => {
  const [modi,setModi] = useLanguage();
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [project40, project41, project42,project43 ,project88]; // Replace with your image URLs

  const openImageModal = (index) => {
    setCurrentImageIndex(index);
    setImageModalOpen(true);
  };

  const closeImageModal = () => {
    setCurrentImageIndex(0); // Reset to the first image when closing
    setImageModalOpen(false);
  };

  const handleNext = () => {
    // Update the current image index for the next image
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const handlePrev = () => {
    // Update the current image index for the previous image
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
  };
    return(
         <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid
          border-dark bg-light p-6 relative dark:border-light dark:bg-dark xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem]
             bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"/>
              {/* Display the first image */}
              <Link href="" className="w-full cursor-pointer overflow-hidden rounded-lg">
              <FramerImage
                src={images[0]}
                alt={`Image ${currentImageIndex + 1}`}
                onClick={() => openImageModal(currentImageIndex)}
                className="w-full h-auto"
                whileHover={{scale:1.05}} 
                transition={{duration:0.2}}
              />
              </Link>

              {/* Image Modal */}
              {isImageModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="absolute inset-0 bg-black opacity-75" onClick={closeImageModal} />
                  <div className="relative">
                  <div className="flex items-center justify-center w-screen h-screen">
                    {/* Center the image within a flex container */}
                    <Image 
                      src={images[currentImageIndex]}
                      alt={`Image ${currentImageIndex + 1}`}
                      className="h-[70%] w-auto mx-auto xs:h-auto" 
                       />
                  </div>
                    <button
                      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-4"
                      onClick={handlePrev}
                    >
                          <motion.i whileHover={{scale:2}} className="fas fa-arrow-left text-dark" />
                    </button>
                    <button
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-4"
                      onClick={handleNext}
                    >
                            <motion.i whileHover={{scale:2}} className="fas fa-arrow-right text-dark" />
                    </button>
                    <button
                    whileHover={{scale:1.05}}
                       className="absolute top-4 right-4 bg-red-500 text-light rounded-full p-4"
                       onClick={closeImageModal}
                    >
                      <motion.i whileHover={{scale:2}} className="fas fa-times" />
                    </button>
                  </div>
                </div>
              )}
            <div className="w-full flex flex-col items-start justify-between mt-5">
                <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">{type}</span>
                <Link href={link} target="_blanc" className="hover:unerline underline-offset-2">
                   <h2 className="w-full my-2 text-left text-3xl font-bold lg:text-2xl">{title}</h2>
                </Link>
               {/*  <div className="w-full mt-2 flex items-center justify-between"> 
                    <Link href={link} target="_blanc" className="text-lg font-semibold underline md:text-base">{modi==="en" ? "Visit" : "Visiter"}</Link>
                    <Link href={github} target="_blanc" className="w-8 md:w-6"><GithubIcon /></Link>
                </div>
                */}
                <p className="text-primary my-2 font-medium dark:text-primaryDark sm:text-sm mt-8">{modi=="en" ? "Project progress" : "Progrés du projet"} : 100%</p>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div class="bg-primary dark:bg-primaryDark h-2.5 rounded-full" style={{ width: `100%`}}></div>
                </div>
                <br/>
                <LikesVery className="text-primary mt-8 dark:text-primaryDark" projectID={title}/>
            </div>
         </article>
    )
}

const Projects1 = ({title,type,img,link,github}) => {
  const [modi,setModi] = useLanguage();
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [project44, project45, project46,project47,project48]; // Replace with your image URLs

  const openImageModal = (index) => {
    setCurrentImageIndex(index);
    setImageModalOpen(true);
  };

  const closeImageModal = () => {
    setCurrentImageIndex(0); // Reset to the first image when closing
    setImageModalOpen(false);
  };

  const handleNext = () => {
    // Update the current image index for the next image
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const handlePrev = () => {
    // Update the current image index for the previous image
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
  };
    return(
         <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid
          border-dark bg-light p-6 relative dark:border-light dark:bg-dark xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem]
             bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"/>
              {/* Display the first image */}
              <Link href="" className="w-full cursor-pointer overflow-hidden rounded-lg">
              <FramerImage
                src={images[4]}
                alt={`Image ${currentImageIndex + 1}`}
                onClick={() => openImageModal(currentImageIndex)}
                className="w-full h-auto"
                whileHover={{scale:1.05}} 
                transition={{duration:0.2}}
              />
              </Link>

              {/* Image Modal */}
              {isImageModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="absolute inset-0 bg-black opacity-75" onClick={closeImageModal} />
                  <div className="relative">
                  <div className="flex items-center justify-center w-screen h-screen">
                    {/* Center the image within a flex container */}
                    <Image 
                      src={images[currentImageIndex]}
                      alt={`Image ${currentImageIndex + 1}`}
                      className="h-[70%] w-auto mx-auto xs:h-auto" 
                       />
                  </div>
                    <button
                      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-4"
                      onClick={handlePrev}
                    >
                          <motion.i whileHover={{scale:2}} className="fas fa-arrow-left text-dark" />
                    </button>
                    <button
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-4"
                      onClick={handleNext}
                    >
                            <motion.i whileHover={{scale:2}} className="fas fa-arrow-right text-dark" />
                    </button>
                    <button
                    whileHover={{scale:1.05}}
                       className="absolute top-4 right-4 bg-red-500 text-light rounded-full p-4"
                       onClick={closeImageModal}
                    >
                      <motion.i whileHover={{scale:2}} className="fas fa-times" />
                    </button>
                  </div>
                </div>
              )}
            <div className="w-full flex flex-col items-start justify-between mt-5">
                <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">{type}</span>
                <Link href={link} target="_blanc" className="hover:unerline underline-offset-2">
                   <h2 className="w-full my-2 text-left text-3xl font-bold lg:text-2xl">{title}</h2>
                </Link>
               {/*} <div className="w-full mt-2 flex items-center justify-between"> 
                    <Link href={link} target="_blanc" className="text-lg font-semibold underline md:text-base">{modi==="en" ? "Visit" : "Visiter"}</Link>
                    <Link href={github} target="_blanc" className="w-8 md:w-6"><GithubIcon /></Link>
                </div>
              */}
                <p className="text-primary my-2 font-medium dark:text-primaryDark sm:text-sm mt-8">{modi=="en" ? "Project progress" : "Progrés du projet"} : 100%</p>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div class="bg-primary dark:bg-primaryDark h-2.5 rounded-full" style={{ width: `100%`}}></div>
                </div>
                <br/>
                <LikesVery className="text-primary mt-8 dark:text-primaryDark" projectID={title}/>
            </div>
         </article>
    )
}



const Projects2 = ({title,type,summary,img,link,github}) => {
  const [modi,setModi] = useLanguage();
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [pro0,pro1111, pro211, pro31,pro41,pro51,pro61,pro71,pro81]; // Replace with your image URLs

  const openImageModal = (index) => {
    setCurrentImageIndex(index);
    setImageModalOpen(true);
  };

  const closeImageModal = () => {
    setCurrentImageIndex(0); // Reset to the first image when closing
    setImageModalOpen(false);
  };

  const handleNext = () => {
    // Update the current image index for the next image
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const handlePrev = () => {
    // Update the current image index for the previous image
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
  };
    return(
         <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid
          border-dark bg-light p-6 relative dark:border-light dark:bg-dark xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem]
             bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"/>
              {/* Display the first image */}
              <Link href="" className="w-full cursor-pointer overflow-hidden rounded-lg">
              <FramerImage
                src={images[0]}
                alt={`Image ${currentImageIndex + 1}`}
                onClick={() => openImageModal(currentImageIndex)}
                className="w-full h-auto"
                whileHover={{scale:1.05}} 
                transition={{duration:0.2}}
              />
              </Link>

              {/* Image Modal */}
              {isImageModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="absolute inset-0 bg-black opacity-75" onClick={closeImageModal} />
                  <div className="relative">
                  <div className="flex items-center justify-center w-screen h-screen">
                    {/* Center the image within a flex container */}
                    <Image 
                      src={images[currentImageIndex]}
                      alt={`Image ${currentImageIndex + 1}`}
                      className="h-[70%] w-auto mx-auto xs:h-auto" 
                       />
                  </div>
                    <button
                      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-4"
                      onClick={handlePrev}
                    >
                          <motion.i whileHover={{scale:2}} className="fas fa-arrow-left text-dark" />
                    </button>
                    <button
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-4"
                      onClick={handleNext}
                    >
                            <motion.i whileHover={{scale:2}} className="fas fa-arrow-right text-dark" />
                    </button>
                    <button
                    whileHover={{scale:1.05}}
                       className="absolute top-4 right-4 bg-red-500 text-light rounded-full p-4"
                       onClick={closeImageModal}
                    >
                      <motion.i whileHover={{scale:2}} className="fas fa-times" />
                    </button>
                  </div>
                </div>
              )}
            <div className="w-full flex flex-col items-start justify-between mt-5">
                <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">{type}</span>
                <Link href={link} target="_blanc" className="hover:unerline underline-offset-2">
                   <h2 className="w-full my-2 text-left text-3xl font-bold lg:text-2xl">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
               {/* <div className="w-full mt-2 flex items-center justify-between"> 
                    <Link href={link} target="_blanc" className="text-lg font-semibold underline md:text-base">{modi==="en" ? "Visit" : "Visiter"}</Link>
                    <Link href={github} target="_blanc" className="w-8 md:w-6"><GithubIcon /></Link>
                </div>
              */}
                <p className="text-primary my-2 font-medium dark:text-primaryDark sm:text-sm mt-8">{modi=="en" ? "Project progress" : "Progrés du projet"} : 100%</p>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div class="bg-primary dark:bg-primaryDark h-2.5 rounded-full" style={{ width: `100%`}}></div>
                </div>
                <br/>
                <LikesVery className="text-primary mt-8 dark:text-primaryDark" projectID={title}/>
            </div>
         </article>
    )
}




const Projects3 = ({title,type,summary,img,link,github}) => {
  const [modi,setModi] = useLanguage();
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [pro811]; // Replace with your image URLs

  const openImageModal = (index) => {
    setCurrentImageIndex(index);
    setImageModalOpen(true);
  };

  const closeImageModal = () => {
    setCurrentImageIndex(0); // Reset to the first image when closing
    setImageModalOpen(false);
  };

  const handleNext = () => {
    // Update the current image index for the next image
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const handlePrev = () => {
    // Update the current image index for the previous image
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
  };
    return(
         <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid
          border-dark bg-light p-6 relative dark:border-light dark:bg-dark xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem]
             bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"/>
              {/* Display the first image */}
              <Link href="" className="w-full cursor-pointer overflow-hidden rounded-lg">
              <FramerImage
                src={images[0]}
                alt={`Image ${currentImageIndex + 1}`}
                onClick={() => openImageModal(currentImageIndex)}
                className="w-full h-auto"
                whileHover={{scale:1.05}} 
                transition={{duration:0.2}}
              />
              </Link>

              {/* Image Modal */}
              {isImageModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="absolute inset-0 bg-black opacity-75" onClick={closeImageModal} />
                  <div className="relative">
                  <div className="flex items-center justify-center w-screen h-screen">
                    {/* Center the image within a flex container */}
                    <Image 
                      src={images[currentImageIndex]}
                      alt={`Image ${currentImageIndex + 1}`}
                      className="h-[70%] w-auto mx-auto xs:h-auto" 
                       />
                  </div>
                    <button
                      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-4"
                      onClick={handlePrev}
                    >
                          <motion.i whileHover={{scale:2}} className="fas fa-arrow-left text-dark" />
                    </button>
                    <button
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-4"
                      onClick={handleNext}
                    >
                            <motion.i whileHover={{scale:2}} className="fas fa-arrow-right text-dark" />
                    </button>
                    <button
                    whileHover={{scale:1.05}}
                       className="absolute top-4 right-4 bg-red-500 text-light rounded-full p-4"
                       onClick={closeImageModal}
                    >
                      <motion.i whileHover={{scale:2}} className="fas fa-times" />
                    </button>
                  </div>
                </div>
              )}
            <div className="w-full flex flex-col items-start justify-between mt-5">
                <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">{type}</span>
                <Link href={link} target="_blanc" className="hover:unerline underline-offset-2">
                   <h2 className="w-full my-2 text-left text-3xl font-bold lg:text-2xl">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
               {/* <div className="w-full mt-2 flex items-center justify-between"> 
                    <Link href={link} target="_blanc" className="text-lg font-semibold underline md:text-base">{modi==="en" ? "Visit" : "Visiter"}</Link>
                    <Link href={github} target="_blanc" className="w-8 md:w-6"><GithubIcon /></Link>
                </div>
              */}
                <p className="text-primary my-2 font-medium dark:text-primaryDark sm:text-sm mt-8">{modi=="en" ? "Project progress" : "Progrés du projet"} : 10%</p>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div class="bg-primary dark:bg-primaryDark h-2.5 rounded-full" style={{ width: `10%`}}></div>
                </div>
                <br/>
                <LikesVery className="text-primary mt-8 dark:text-primaryDark" projectID={title}/>
            </div>
         </article>
    )
}




const projects = () => {
  const [modi,setModi] = useLanguage();
    return (
        <>
           <Head>
               <title>MH My.Portfolio | {modi==="en" ? "Projects Page" : "Page Des Projets"}</title>
               <meta name="description" content="any description"/>
           </Head>
           <TransitionEffect />
           <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
             <Layout className="pt-16">
                <AnimatedText text={modi==="en" ? "Imagination Trumps Knowledge!" : "L'imagination emporte sur la connaissance !"} className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
                <div className="grid grid-col-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                     <div className="col-span-12">
                        <FeaturedProject 
                        title="Web App 1"
                        img={project1}
                        summary={modi==="en" ? `A social office management web application to manage group health insurance 
                        as well as occupational medicine with the frameworks: Angular and Spring Boot.` : 
                        `Une application web de gestion de bureau social pour gérer l'assurance du groupe maladie 
                        ainsi que la médecine du travail avec les frameworks :  Angular et Spring Boot.`} 
                        link="/"
                        github="/"
                        type={modi==="en" ? "A Social Office Management Web Application" : "Projet De Gestion De Bureau Social"}
                        />
                     </div>
                     <div className="col-span-6 sm:col-span-12">
                            <Projects 
                            title="Mobile App 1"
                            img={project1}
                            link="/"
                            github="/"
                            type={modi==="en" ? "Mobile app with ionic, weather api and firebase <<Daily Note>>" : 
                            "Mobile app avec ionic, weather api et firebase <<Daily Note>>"}
                            />
                     </div>
                     <div className="col-span-6 sm:col-span-12">
                           <Projects1 
                            title="Frontend web Project 1"
                            img={project1}
                            link="/"
                            github="/"
                            type={modi==="en" ? "Gaming View with html/css/Scss/JS." : "Gaming View avec html/css/Scss/JS."}
                            />
                     </div>
                     <div className="col-span-12">
                           <FeaturedProject1
                            title="Mobile App 2"
                            img={project1}
                            summary={modi==="en" ? `A mobile application for sales and 
                            customer meetings in the electronic world with the frameworks: ionic, sqlite and firebase.` 
                            : `Une application mobile sur les ventes et les rendez-vous des client en monde electronique avec
                            les frameworks : ionic, sqlite et firebase.`} 
                            link="/"
                            github="/"
                            type={modi==="en" ? "A mobile application for sales and customer meetings" : "Projet mobile sur les ventes et les rendez-vous"}
                            />
                     </div>
                     <div className="col-span-6 sm:col-span-12">
                            <Projects2 
                            title="Desktop App"
                            img={project1}
                            summary={modi==="en" ? `A desktop application is face-to-face 
                            sales of books, CDs, DVDs and etc. with JAVA, JavaFX and mySQL.` 
                            : `Une application desktop sur les ventes des livres,CD,DVD et etc en présentiel avec 
                            JAVA, JavaFX et mySQL.`} 
                            link="/"
                            github="/"
                            type={modi==="en" ? "A desktop application for sale books" : "Une application desktop sur les ventes des livres"}
                            />
                     </div>
                     <div className="col-span-6 sm:col-span-12">
                     <Projects3
                            title="ML App"
                            img={project1}
                            summary={modi==="en" ? `Machine learning app of Fake news detection with conception UML and program language python.` 
                            : `Une application machine learning de détection des fausses informations avec conception UML et language python.`} 
                            link="/"
                            github="/"
                            type={modi==="en" ? "Machine learning app Fake news detection" : "Une application machine learning de détection des fausses informations"}
                            />
                     </div>
                </div>
             </Layout>
           </main>
        </>
    )
}
export default projects ;