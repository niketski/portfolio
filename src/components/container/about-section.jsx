import aboutProfileImage from '../../assets/images/about-featured-img.png'
import aboutImgAccent from '../../assets/images/about-bg-accent.png'

export default function AboutSection() {
    return (
        <section className="py-[50px]">
            <div className="container">
                <div className="lg:flex">
                    <div className="lg:w-[46.66%] mb-[50px] lg:mb-[0]">
                        <div className="relative min-[1480px]:ml-[-157px] min-[1201px]:ml-[-60px] max-w-[450px] lg:max-w-[unset] mx-auto">
                            <div className="md:pl-[154px] md:pt-[95px] relative pl-[100px] pt-[30px]">
                                <img src={aboutImgAccent} alt="" className="absolute top-0 left-0 w-full h-full object-cover object-left-top"/>
                                <img src={aboutProfileImage} alt="Nicole Benedict Lim" width="526" height="902" className="relative z-10"/>
                            </div>
                        </div>
                    </div>s
                    <div className="lg:w-[53.34%] lg:pl-[50px] lg:pt-[120px]">
                        <div>
                            <h2 className="text-[#fff] mb-[40px] lg:mb-[70px]">About <span className="text-primary">Me</span></h2>
                            <div className="text-[#fff] text-[15px] xl:text-[18px] leading-[28px]">
                                <p className="mb-[20px] text-[15px] xl:text-[18px]"><strong>Hi! I&apos;m Nico from Paranaque City, Philippines. I&apos;m a freelance and full-time Front-End Developer</strong>. As a developer, I translate design into a functional and responsive website. I also ensure that it is optimized and creatively done. I&apos;m always eager to learn and usually express it by keeping myself updated to the latest technologies. I do collaborate with other developers by joining communities and trainings so that I’ll be able to know how other developers write their codes and learn from them.</p>
                                <p className="mb-[20px] text-[15px] xl:text-[18px]">I started my career in my first company as a Front-End Web Developer, specialized in creating Real Estate Websites in 2018. After several years, I got promoted as a Full Stack Web Developer. As I always seek for career growth, after a year I have decided to look for another company that aligns with my career path. Currently, I have been working on my new company as a Front-End Developer focused on creating business websites.</p>
                                <p className=" text-[15px] xl:text-[18px]">Work Life Balance is very important specially on developers because most of the day, we think a lot of ways to figure out how to build things and to fix bugs. Therefore, to refresh my mind and to relax, I either play video games or spend time with my family and friends.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}