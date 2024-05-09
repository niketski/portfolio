import PropTypes from 'prop-types';
import DetailsCard from './details-card';

export default function ExperienceInfo({ experience }) {

    const {
        company,
        role,
        description,
        dateStart,
        dateEnd
    } = experience;

    let startDate = `${dateStart.month} ${dateStart.year}`;
    let endDate = dateEnd != null ? `${dateEnd.month} ${dateEnd.year}` : <span className="text-[14px] bg-primary text-[#fff] capitalize px-[15px] py-[6px] rounded-[10px]">Present</span>

    return (
        <div>
            <div className="min-h-[145px]">
                <h3 className="site-bg-gradient gradient-bordered-text">{dateStart.year}</h3>         
            </div>
            <div className="pl-[70px] relative">
                <div className="mb-[20px]">
                    <em className="absolute w-[25px] h-[25px] bg-primary rounded-[50%] left-0 top-0"></em>
                    <span className="font-bold text-[13px] text-[#4D4D4D] uppercase">{`${startDate} -`} {endDate}</span>
                </div>

                <DetailsCard
                    subtitle={company}
                    title={role}
                    content={description}/>
            </div>
        </div>
    );

}

ExperienceInfo.propTypes = {
    experience: PropTypes.object
};