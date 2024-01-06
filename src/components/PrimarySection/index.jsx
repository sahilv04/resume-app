import ResumeTitle from "../ResumeTitle"

const PrimarySection = ({ profile }) => {
    return (
        <div className='primary-section'>
            <ResumeTitle profile={profile} />
        </div>
    )
}

export default PrimarySection