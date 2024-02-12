import authFetch from "service/authfetch";
import authFetchGet from "service/authFetchGet";

const createjobData = (data) => {

    return authFetch("/api/jobs", 'Post', data)

}

export const getJobData = (pageId) => {


    return authFetchGet(`/api/jobs/myjobs?${pageId}`, 'GET')
}
export default createjobData;