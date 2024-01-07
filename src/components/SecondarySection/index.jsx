import { useSelector } from "react-redux"
import BlockHeading from "../BlockHeading"

const SecondarySection = () => {
    const mainState = useSelector(state => state.main)
    const { fields: profile } = mainState.resume

    return (
        <div className='secondary-section'>
            <div className="block-container">
                <BlockHeading>Contact</BlockHeading>
                <div>{profile.location}</div>
                <div>{profile.email}</div>
                <div>{profile.phone}</div>
            </div>
            <div className="block-container">
                <BlockHeading>Skills</BlockHeading>
                {
                    profile.skills.map((skill) => {
                        return (
                            <li key={skill.sys.id}>{skill.fields.name}</li>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SecondarySection