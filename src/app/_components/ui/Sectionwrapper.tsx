'use client'

import useIntersection from '@/hooks/useIntersection'
import React, { useEffect, useRef } from 'react'

const Sectionwrapper = ({children , idname}:{children : React.ReactNode , idname:string}) => {

   const container =  useRef(null)
   const {sections} = useIntersection()


   useEffect(() => {
    if (container.current) {
      // Push the section's ref into the sections array
      sections.current.push(container.current);
    }
  }, [idname, sections]); 
   
  return (
    <section ref={container} id={idname}>{children}</section>
  )
}

export default Sectionwrapper