import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import { experienceData } from '../../data/experience-data';
import ExperienceInfo from '../experience-info';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function ExperiencesSection() {
    const slider = useRef();
    const sliderInner = useRef();
    const section = useRef();
    const matchMedia = gsap.matchMedia();
    const [sliderWidth, setSliderWidth] = useState();

    const computeSliderWidth = slides => {
        let sliderPadding = 204;
        let sliderLeftRightPadding = sliderPadding * 2;
        let totalWidth = 0;

        for (let slide of slides) {
                
            totalWidth += slide.offsetWidth;
            console.log(slide.offsetWidth);
            
        }

        return totalWidth + sliderLeftRightPadding;
    };
    
        useGSAP(() => {

            let children = sliderInner.current.children;
            let sliderWidth = computeSliderWidth(children);

            setSliderWidth(sliderWidth);

            matchMedia.add(
                {
                    isDesktop: '(min-width: 1280px)',
                    isTablet: '(min-width: 1024px)'
                },
                (context) => {
                    
                    const { isDesktop } = context.conditions;
                    
                    gsap.to(slider.current, {
                        xPercent: (isDesktop ? -50 : -70),
                        ease: 'none',
                        scrollTrigger: {
                            trigger: section.current,
                            pin: true, 
                            scrub: 1,
                            end: () => "+=" + slider.current.offsetWidth,
                            markers: false
                        }
                    });
                }
            );
        
        }, []);
    

        console.log(sliderWidth);

    return (
        <section className="py-[50px]" ref={section}>
            <div className="container">
                <h2 className="text-center text-[#fff] mb-[80px] lg:mb-[30px] xl:mb-[100px]">Professional <br/><span className="text-primary">Experience</span></h2>
            </div>
            <div className="overflow-hidden relative">
                <div className="slide-overlay-left slide-overlay-right absolute top-0 left-0 w-full h-full hidden lg:block pointer-events-none"></div>
                <div 
                    style={{ width: `${sliderWidth}px` }} 
                    className="w-[auto]"
                    ref={slider}>
                    
                    <div className="relative px-[15px] lg:px-[204px]  w-[100vw] lg:w-[auto]" ref={sliderInner}>
                        {experienceData &&

                            experienceData.map((data, index) => {
                                return (
                                    <div 
                                        key={index}
                                        className="slide-item block lg:inline-block lg:w-[780px] xl:w-[890px] mb-[60px] lg:mb-0">
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