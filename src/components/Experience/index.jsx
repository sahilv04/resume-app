import { useSelector } from "react-redux"
import BlockHeading from "../BlockHeading"
import ExperienceItem from "./components/experience-item"
import "./index.css"

const Experience = () => {
    const mainState = useSelector(state => state.main)
    const { fields: profile } = mainState.resume

    return (
        <div className="experience-container block-container">
            <BlockHeading>Work Experience</BlockHeading>
            {
                profile.experience.map((item, idx) => {
                    return (
                        <ExperienceItem item={item} key={idx} />
                    )
                })
            }

        </div>
    )
}

export default Experience