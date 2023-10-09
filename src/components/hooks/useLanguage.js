
import { useEffect, useState } from "react";

const useLanguage = () =>{

    const [modi,setModi] = useState("");


    useEffect(()=>{
        const userPref = window.localStorage.getItem('langue');
             if(userPref) {
                if(userPref==="fr"){
                    setModi("fr")
                    window.localStorage.getItem('langue',"fr");
                }else{
                    setModi("en")
                    window.localStorage.getItem('langue',"en");
                }
             }else{
                setModi("en")
                window.localStorage.getItem('langue',"en");
             }
        
     },[])

    return[modi,setModi]
}

export default useLanguage;