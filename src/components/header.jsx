import headerLogo from '../assets/images/logo-header.svg';
import Button from './ui/button';
import IconDownload from './ui/icon-download';
import BurgerMenuButton from './ui/burger-menu-button';
import MobileMenu from './mobile-menu';
import PropTypes from 'prop-types';

export default function Header({ mobileMenuHandler, isMobileMenuActive }) {
    
    return (
        <>
            <header className="fixed top-0 left-0 w-full z-[100] bg-dark py-[20px] lg:py-[30px]">
                <div className="container">
                    <div className="flex justify-between items-center">
                        <div>
                            <img src={headerLogo} alt="Nico Dev Logo" />
                        </div>
                        <div className="flex items-center">
                            <nav className=" hidden lg:inline-block">
                                <ul className=" list-none">
                                    <li className="inline-block align-middle text-[#fff] text-[20px] font-bold mr-4"><a href="#" className="relative inline-block after:content-[''] after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:bg-[#fff] after:h-[2px] after:transition-[width] after:hover:w-full">Home</a></li>
                                    <li className="inline-block align-middle text-[#fff] text-[20px] font-bold mr-4"><a href="#" className="relative inline-block after:content-[''] after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:bg-[#fff] after:h-[2px] after:transition-[width] after:hover:w-full">Projects</a></li>
                                    <li className="inline-block align-middle text-[#fff] text-[20px] font-bold mr-4"><a href="#" className="relative inline-block after:content-[''] after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:bg-[#fff] after:h-[2px] after:transition-[width] after:hover:w-full">Skills</a></li>
                                    <li className="inline-block align-middle text-[#fff] text-[20px] font-bold mr-4"><a href="#" className="relative inline-block after:content-[''] after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:bg-[#fff] after:h-[2px] after:transition-[width] after:hover:w-full">Experience</a></li>
                                    <li className="inline-block align-middle text-[#fff] text-[20px] font-bold mr-4"><a href="#" className="relative inline-block after:content-[''] after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:bg-[#fff] after:h-[2px] after:transition-[width] after:hover:w-full">About</a></li>
                                    <li className="inline-block align-middle text-[#fff] text-[20px] font-bold"><a href="#" className="relative inline-block after:content-[''] after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:bg-[#fff] after:h-[2px] after:transition-[width] after:hover:w-full">Contact</a></li>
                                </ul>
                            </nav>
                            <div className="hidden lg:inline-block">
                                <Button className="!text-[14px] !inline-flex !px-[15px] ml-[30px]">Download my CV <IconDownload className="ml-[10px]"/></Button>
                            </div>
                            <div className="inline-block lg:hidden">
                                <BurgerMenuButton onClick={() => { mobileMenuHandler(true) }}/>
                            </div>
                        </div>
                    </div>
                </div>
                <MobileMenu isActive={isMobileMenuActive} onClose={() => { mobileMenuHandler(false) }}/>
            </header>
        </>
    );
}

Header.propTypes = {
    mobileMenuHandler: PropTypes.func,
    isMobileMenuActive: PropTypes.bool
};