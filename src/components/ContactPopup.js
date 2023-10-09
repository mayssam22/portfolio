import React ,{ useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import config from '../config/email.js';
import useLanguage from './hooks/useLanguage.js';

const ContactPopup = ({ isOpen, onClose }) => {
  const [modi,setModi] = useLanguage();
  //const [formData, setFormData] = useState({ name: '', email: '', message: '' });
 //const emailjs = require('emailjs');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [load, setLoad] = useState(false);
  //const config = require('../config/email.js');
  const name1 = config.smtp.names;
  const username = config.smtp.username;
  const pub = config.smtp.publicKey;
  const serv = config.smtp.service;
  const temp = config.smtp.template;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const str = `My name is: ${name},
    My email address is: ${email},
    My message to you is: ${message}.`;
    setLoad(true)
    emailjs.send('service_xy16q9r','template_de81pw7',{
      from_name : name,
      to_name : 'MH My.Portfolio',
      from_email : email,
      to_email : 'leoscottyruino@gmail.com',
      message : str,
    },'yyf2W0BFILK2-wNUT').then(()=>{
      setTimeout(() => {
        // After the message is sent (simulated delay), reset the loading state
        setLoad(false);
      }, 2000);
      alert('Thank you. I will contact you as soon as possible.');
      setName("");setEmail("");setMessage("");
    },(error)=>{
      setTimeout(() => {
        // After the message is sent (simulated delay), reset the loading state
        setLoad(false);
      }, 2000);
      console.log(error);
      alert("Something went wrong.");
    })

  };

  return (
    <AnimatePresence>
    {isOpen && (
          <motion.div
            initial={{scale:0,opacity:0,x:"-50%",y:"-50%"}}
            animate={{scale:1,opacity:1}}     
            className="min-w-[50vw]  flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md md:w-[90%]"
          >
    
          <div className="md:w-1/2">
            <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 1 }}
            className="absolute rounded-full w-6 h-6 bg-light dark:bg-dark  top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-light"
          >
            X
          </motion.button>
          <br></br>

          <h2 className="text-1xl font-semibold mb-4 text-center text-light dark:text-dark md:hidden">{modi==="en" ? "Get In Touch." : "Entrer en contact."}</h2>
          <h2 className="text-3xl font-semibold mb-4 text-center text-light dark:text-dark md:hidden">{modi==="en" ? "Contact Me" : "Contacter Moi"}</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-2 text-light dark:text-dark md:text-base">
                {modi==="en" ? "Your Name" : "Votre Nom"}<span className='text-red-500'>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={name}
                placeholder={modi==="en" ? "Enter your name..." : "Enter votre nom..."}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-md p-2 md:text-base"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-2 text-light dark:text-dark md:text-base">
                {modi==="en" ? "Your Email" : "Votre Email"}<span className='text-red-500'>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={modi==="en" ? "Enter your email..." : "Enter votre email..."}
                className="w-full border rounded-md p-2 md:text-base"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-medium mb-2 text-light dark:text-dark md:text-base">
                Message<span className='text-red-500'>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={modi==="en" ? "Enter your message..." : "Enter votre message..."}
                className="w-full border rounded-md p-2 md:text-base"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={load==true}
              className={`flex items-center justify-center dark:bg-dark dark:text-light bg-light text-dark p-2.5 px-6 rounded-lg text-lg font-semibold 
               md:text-base
              ${load==true ? 'pointer-events-none' : 'hover:dark:bg-light hover:dark:text-dark hover:bg-dark hover:text-light'} 
              border border-solid border-transparent hover:dark:border-dark hover:border-light relative`}
            >
                  {load ? (
                            <div className="flex items-center">
                              Send <span className='m-2'></span>
                            <motion.div
                              className="h-2.5 w-2.5 dark:bg-light bg-dark rounded-full mr-1"
                              initial={{ opacity: 0 }}
                              animate={{
                                opacity: [0.5, 1, 0.5], // Animate opacity to create the loading effect
                                x: ['-1rem', '0', '1rem'], // Animate horizontal position
                              }}
                              transition={{
                                duration: 1.2, // Adjust the duration as needed
                                repeat: Infinity, // Make the animation repeat infinitely
                                ease: 'linear', // Linear easing for a consistent pace
                              }}
                            ></motion.div>
                            <motion.div
                              className="h-2.5 w-2.5 dark:bg-light bg-dark  rounded-full mr-1"
                              initial={{ opacity: 0 }}
                              animate={{
                                opacity: [0.5, 1, 0.5],
                                x: ['-1rem', '0', '1rem'],
                              }}
                              transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                ease: 'linear',
                                delay: 0.2, // Add a delay for the second dot
                              }}
                            ></motion.div>
                            <motion.div
                              className="h-2.5 w-2.5 dark:bg-light bg-dark  rounded-full"
                              initial={{ opacity: 0 }}
                              animate={{
                                opacity: [0.5, 1, 0.5],
                                x: ['-1rem', '0', '1rem'],
                              }}
                              transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                ease: 'linear',
                                delay: 0.4, // Add a delay for the third dot
                              }}
                            ></motion.div>
                          </div>
                  ) : (
                    modi==="en" ? "Send" : "Envoi"
                  )}
            </motion.button>
            <br></br>
          </form>
          </div>
        </motion.div>
    )}
  </AnimatePresence>
  );
};

export default ContactPopup;