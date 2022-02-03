import React,{useRef} from 'react'
import Intro from './Intro'
import About from './About'
import Profile from './Profile'
import Skills from './Skills'
import Archiving from './Archiving'
import Footer from './Footer'
import Project from './Project'
import OtherStudy from './OtherStudy'

import { FaArrowUp } from 'react-icons/fa';




function MainHome() {

    const aboutSection = useRef(null);
    

    const moveToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    const handleScroll = () => {
        const offsetTop = aboutSection.current.offsetTop;
        console.log('1', scrollX)

        if(!offsetTop){
            aboutSection.current.style.display = 'none'
        }else{
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            })
        }
    }



    return (
        <>
        <section>
            <Intro handleScroll={handleScroll}/>
        </section>

        <section ref={aboutSection}>
            <About />
        </section>

        <section>
            <Profile />
        </section>

        <section>
            <Skills />
        </section>

        <section>
            <Archiving />
        </section>

        <section>
            <Project />
        </section>

        <section>
            <OtherStudy />
        </section>

        <section>
            <Footer />
        </section>

         <div className="ontop" onClick={moveToTop}>
             <FaArrowUp />
         </div>
        </>
    )
}

export default MainHome
