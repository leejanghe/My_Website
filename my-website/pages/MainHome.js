import React,{useRef} from 'react'
import Intro from './Intro'
import About from './About'
import Test from './test'
import Test1 from './Test1'
import Footer from './Footer'

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
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        })
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
        <Test />
        </section>
        <section>
        <Test1 />
        </section>
        <section>
        <Test />
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
