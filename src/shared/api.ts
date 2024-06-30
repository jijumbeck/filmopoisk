import axios from "axios";

export const API_URL = 'http://localhost:3030/api/v1';

export const api = axios.create({
    baseURL: API_URL
})