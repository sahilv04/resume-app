import { useSelector } from "react-redux"
import "./index.css"
import BlockHeading from "../BlockHeading"

const Summary = () => {
    const mainState = useSelector(state => state.main)
    const { fields: profile } = mainState.resume

    return (
        <div className="summary-container">
            <BlockHeading>Professional Summary</BlockHeading>
            <div>{profile.summary}</div>
        </div>
    )
}

export default Summary