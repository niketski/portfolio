import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Button({ className, href = null, children }) {    

    
    return (
        href ? <Link 
                    to={href} 
                    className={`${ className ? className : ''} transition-shadow duration-300 inline-block font-bold text-[#fff] rounded-[10px] text-[13px] xl:text-[16px] px-[20px] xl:px-[38px] py-[12.5px] xl:py-[10px] bg-gradient-to-r from-secondary from-[14%] to-[#681673] to-[82%] shadow-[0px_2px_11px_rgba(255,255,255,0)] hover:shadow-[0px_2px_11px_rgba(255,255,255,.30)]`}>
                    {children}
                </Link> :
                <button 
                    type="button" 
                    className={`${ className ? className : ''} transition-shadow duration-300 inline-block font-bold text-[#fff] rounded-[10px] text-[13px] xl:text-[16px] px-[20px] xl:px-[38px] py-[12.5px] xl:py-[10px] bg-gradient-to-r from-secondary from-[14%] to-[#681673] to-[82%] shadow-[0px_2px_11px_rgba(255,255,255,0)] hover:shadow-[0px_2px_11px_rgba(255,255,255,.30)]`}>
                    {children}
                </button>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    isLink: PropTypes.bool,
    children: PropTypes.string,
    href: PropTypes.string
}