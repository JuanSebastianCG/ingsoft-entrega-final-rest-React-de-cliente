import { basePath, apiVersion } from "./config";

export function signUpApi(data) {
    const url = `${basePath}/${apiVersion}/signup`;
    /* http://localhost:5000/api/v1/signup */
    console.log(url)
    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application.json",
        },
    };
    
    return fetch(url, params).then((response) => {
        return response.json();
    });
}