import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import { experienceData } from '../../data/experience-data';
import ExperienceInfo from '../experience-info';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function ExperiencesSection() {
    const slider = useRef();
    const section = useRef();

    console.log(slider.current);

    useGSAP(() => {

        gsap.to(slider.current, {
          xPercent: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: section.current,
            pin: true,
            scrub: 1,
            end: () => "+=" + slider.current.offsetWidth,
            markers: false
          }
        })
    
    }, []);

    return (
        <section className="py-[50px]" ref={section}>
            <div className="container">
                <h2 className="text-center text-[#fff] mb-[100px]">Professional <br/><span className="text-primary">Experience</span></h2>
            </div>
            <div className="overflow-hidden">
                <div 
                    style={{ width: `${(890 * 4) + (204 * 2)}px` }} 
                    ref={slider}>
                    
                    <div className="relative px-[204px] flex">
                        {experienceData &&

                            experienceData.map((data, index) => {
                                return (
                                    <div 
                                        key={index}
                                        className="inline-block w-[890px]">
                                        <ExperienceInfo experience={data}/>
                                    </div>
                                );
                            })
                        }
                    </div>

                </div>
            </div>
        </section>
    );

}

ExperiencesSection.propTypes = {

};