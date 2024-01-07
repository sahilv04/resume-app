import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { useEffect } from 'react';

const ExperienceItem = ({ item }) => {
    const { title, company, location, description, from, to } = item.fields || {}
    const { id } = item.sys

    const desHtml = documentToHtmlString(description)

    useEffect(() => {
        if (document.getElementById("desc-" + id)) {
            document.getElementById("desc-" + id).innerHTML = desHtml
        }
    }, [desHtml])

    return (
        <div className="block-item-container">
            <div className="title-row">
                <b className='fs-subtitle color-subtitle'>{company}</b>, {location}
            </div>
            <div className="d-flex space-between sub-title-row">
                <div>
                    <b className='fs-subtitle'>{title}</b>
                </div>
                <div>{from} - {to}</div>
            </div>
            <div className="description" id={"desc-" + id} />
        </div>
    )
}

export default ExperienceItem