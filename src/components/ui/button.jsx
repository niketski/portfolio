import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Button({ className, href = null, children, variant, onClick, type = 'button'}) {    

    let buttonStyleClasses = '';

    switch(variant) {

        case 'muted':

            buttonStyleClasses = 'transition-colors duration-300 text-[#ababab] hover:text-[#fff]';

            break;

        default:

            buttonStyleClasses = 'text-[#fff] bg-gradient-to-r from-secondary from-[14%] to-[#681673] to-[82%] transition-shadow duration-300 shadow-[0px_2px_11px_rgba(255,255,255,0)] hover:shadow-[0px_2px_11px_rgba(255,255,255,.30)]';
    }

    return (
        href ? <Link 
                    to={href} 
                    className={`${ className ? className : ''} ${buttonStyleClasses} btn`}>
                    {children}
                </Link> :
                <button 
                    type={type} 
                    className={`${ className ? className : ''} ${buttonStyleClasses} btn`}
                    onClick={ onClick ? onClick : null }>
                    {children}
                </button>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    isLink: PropTypes.bool,
    children: PropTypes.string,
    href: PropTypes.string,
    variant: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string
}