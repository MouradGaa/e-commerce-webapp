import axios from "axios";


const URL = "http://localhost:5000/api/";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTY0YTlmNGQ2OWUyMTJhMWUwYjgxYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODMwMjk1MCwiZXhwIjoxNjM4MzA2NTUwfQ.ab3g3eVdBNtGLyL924M6chbhFs-YdRsCwCKXfrg3fAQ"


export const AxiospublicRequest = axios.create({
    baseURL: URL
});

export const AxiosprivateRequest = axios.create({
    baseURL: URL,
    headers: {
        Token : `Bearer ${TOKEN}`
    }  
});