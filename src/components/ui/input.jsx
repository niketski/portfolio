import PropTypes from 'prop-types'

export default function Input({ label, type, name, id, placeholder, onChange }) {
    return (
        <>
            {label && <label htmlFor={id} className="hidden">{label}</label>}
            <input 
                type={type} 
                name={name} 
                id={id}
                placeholder={placeholder} 
                onChange={onChange}
                className="block w-full h-[55px] lg:h-[75px] text-[15px] lg:text-[18px] text-[#fff] font-normal bg-[#03132A] px-[25px] border-none rounded-[10px] outline-none focus:outline-2 focus:outline-primary"/>
        </>
    );
}

Input.propTypes = {
    label: PropTypes.string, 
    type: PropTypes.string, 
    name: PropTypes.string, 
    id: PropTypes.string, 
    placeholder: PropTypes.string,
    onChange: PropTypes.func
}