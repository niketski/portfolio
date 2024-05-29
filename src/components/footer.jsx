import GetInTouchForm from "./container/get-in-touch-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

    return (
        <footer className="bg-primary" id="contact">
          <div className="block lg:flex">

              <div className="lg:w-[52.75%]">

                <div className="bg-[#031a39] lg:rounded-tr-[50px] lg:rounded-br-[50px] pt-[70px] lg:pt-[220px] pb-[70px] lg:pb-[160px] px-[15px] md:px-[30px] xl:px-[90px]">
                  <h2 className="text-[#fff] mb-[50px]">Get in <span className="text-primary">Touch</span></h2>
                  <p className="text-[18px] text-[#fff] mb-[40px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="relative">
                    <GetInTouchForm/>
                  </div>
                </div>

              </div>

              <div className="lg:w-[47.25%]">
                <div className="pt-[70px] lg:pt-[220px] pb-[70px] lg:pb-[160px] px-[15px] md:px-[30px] xl:px-[60px]">
                  <h2 className="text-[#fff] mb-[50px]">Contact Me</h2>

                  <div className="text-[#fff] text-[16px] lg:text-[20px] font-medium mb-[50px]">
                    <ul>

                      <li className="flex items-center pl-[40px] lg:pl-[50px] mb-[20px] relative">
                        <FontAwesomeIcon 
                          icon={faPhone} 
                          className="text-[#fff] text-[25px] lg:text-[32px] absolute top-[-2px] left-0"/>
                        <a href="tel:+63.921.969.7480" className="transition-colors duration-300 hover:text-[#031a39]">+63 921 969 7480</a>
                      </li>

                      <li className="flex items-center pl-[40px] lg:pl-[50px] mb-[20px] relative">
                        <FontAwesomeIcon 
                          icon={faEnvelope} 
                          className="text-[#fff] text-[25px] lg:text-[32px] absolute top-[-2px] left-0"/>
                        <a href="mailto: limnicolebenedict3@gmail.com" className="transition-colors duration-300 hover:text-[#031a39]">limnicolebenedict3@gmail.com</a>
                      </li>

                      <li className="flex items-center pl-[40px] lg:pl-[50px] mb-[20px] relative">
                        <FontAwesomeIcon 
                          icon={faMapMarkerAlt} 
                          className="text-[#fff] text-[25px] lg:text-[32px] absolute top-[-2px] left-0"/>
                        <a href="https://maps.app.goo.gl/uPxnWL52Uk5Mh46V8" target="blank" className="transition-colors duration-300 hover:text-[#031a39]">0393 Quirino Avenue Don Galo Parañaque City</a>
                      </li>

                    </ul>
                  </div>

                  <div className="mb-[30px]">
                    <ul>
                      <li className="inline-block align-middle mr-[20px]">
                        <a href="https://www.facebook.com/nicolebenedict.lim" target="_blank">
                          <FontAwesomeIcon icon={faFacebook} className="text-[#fff] text-[32px] transition-colors duration-300 hover:text-[#031a39]"/>
                        </a>
                      </li>
                      <li className="inline-block align-middle mr-[20px]">
                        <a href="https://github.com/niketski" target="_blank">
                          <FontAwesomeIcon icon={faGithub} className="text-[#fff] text-[32px] transition-colors duration-300 hover:text-[#031a39]"/>
                        </a>
                      </li>
                      <li className="inline-block align-middle">
                        <a href="https://www.linkedin.com/in/nicolelim3/" target="_blank">
                          <FontAwesomeIcon icon={faLinkedin} className="text-[#fff] text-[32px] transition-colors duration-300 hover:text-[#031a39]"/>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-[16px] text-[#fff]">Copyright © NicoDev 2024.</p>
                  </div>
                </div>
              </div>
          </div>
      </footer>
    );
}