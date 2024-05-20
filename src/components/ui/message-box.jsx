import PropTypes from 'prop-types';

export default function MessageBox({ children, color }) {
    return (
        <div className={`border-2 border-${color} text-${color} rounded-[10px] px-[15px] py-[10px] text-center`}>
            {children}
        </div>
    );
}

MessageBox.propTypes = {
    children: PropTypes.object,
    color: PropTypes.string
};