import { useSelector } from "react-redux"
import BlockHeading from "../BlockHeading"

const Experience = () => {
    const mainState = useSelector(state => state.main)
    const { fields: profile } = mainState.resume

    return (
        <div className="experience-container block-container">
            <BlockHeading>Work Experience</BlockHeading>
        </div>
    )
}

export default Experience