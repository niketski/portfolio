import PropTypes from 'prop-types'

export default function Textarea({ label, name, id, placeholder, onChange }) {
    return (
        <>
            {label && <label htmlFor={id} className="hidden">{label}</label>}
            <textarea 
                name={name} 
                id={id}
                placeholder={placeholder} 
                onChange={onChange}
                className="block w-full h-[221px] text-[15px] lg:text-[18px] text-[#fff] font-normal bg-[#03132A] px-[25px] border-none rounded-[10px] resize-none pt-[28px] outline-none focus:outline-2 focus:outline-primary"/>
        </>
    );
}

Textarea.propTypes = {
    label: PropTypes.string,  
    name: PropTypes.string, 
    id: PropTypes.string, 
    placeholder: PropTypes.string,
    onChange: PropTypes.func
}