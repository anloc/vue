export const getListRequest = function(url) {
    return axios.get(process.env.MIX_API_PATH + url);
}

export const deleteRequest = function(url, id) {
    return axios.delete(process.env.MIX_API_PATH + url + "/" + id);
}

export const updateRequest = function (url, data) {
    const config = {
        headers: {
            'Content-Type': 'application/merge-patch+json',
        },
    };
    return axios.patch(process.env.MIX_API_PATH + url, data, config);
}

export const createRequest = function(url, data) {
    return axios.post(process.env.MIX_API_PATH + url, data);
}
