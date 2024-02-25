import { useEffect, useRef, useState } from "react";

const useIntersection = () => {
   const sections = useRef<any[]>([]);

   useEffect(() => {
    const navs = document.querySelectorAll('.menu-items')

     const observer = new IntersectionObserver((entries) => {
       entries.forEach((entry) => {
         if (entry.isIntersecting) {
          console.log(entry.target);
           navs.forEach((elem)=>{
             if(elem instanceof HTMLAnchorElement &&  elem.href.split('#')[1].toString()=== entry.target.id.toString() ){
               elem.classList.remove('text-white')
               elem.classList.add('text-black')
             }else{
              elem.classList.remove('text-black')
              elem.classList.add('text-white')
             }
           })
         }


       });
     }, { threshold: 0.9});


     if(sections){
       sections.current.forEach((elem)=>{
        observer.observe(elem)
       })
     }

    

     return () => {
       observer.disconnect();
     };
   }, []);


   return {sections };
};

export default useIntersection;
