import { api } from "../../shared/api";

export async function loginRequest(username: string, password: string) {
    const response = await api.post('login', {
        username, password
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response.data;
}