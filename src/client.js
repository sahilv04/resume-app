import { createClient } from "contentful"

export const client = createClient({
    space: process.env.REACT_APP_CMS_SPACE_ID,
    accessToken: process.env.REACT_APP_CMS_API_KEY,
    host: process.env.REACT_APP_BASE_URL
})