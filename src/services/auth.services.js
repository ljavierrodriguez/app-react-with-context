export const serviceLogin = data => {
    return fetch(data.apiURL, data.options).then(resp => resp.json());
}