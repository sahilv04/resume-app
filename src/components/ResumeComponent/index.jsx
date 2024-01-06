import PrimarySection from "../PrimarySection"
import SecondarySection from "../SecondarySection"

const ResumeComponent = ({ profile }) => {
    return (
        <div className='resume-content-inner'>
            <PrimarySection profile={profile} />
            <SecondarySection profile={profile} />
        </div>
    )
}

export default ResumeComponent