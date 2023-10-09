import { useState } from 'react';
import ContactPopup from './ContactPopup';
import Link from 'next/link';
import useLanguage from './hooks/useLanguage';

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modi,setModi] = useLanguage();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Link href="" onClick={togglePopup} className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'>
        {modi==="en" ? "Contact Me" : "Contacter Moi"}
      </Link>
      <ContactPopup isOpen={isOpen} onClose={togglePopup} />
    </div>
  );
};

export default ContactForm;