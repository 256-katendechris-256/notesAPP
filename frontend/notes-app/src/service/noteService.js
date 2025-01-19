import axios from 'axios';

const BASE_URL = 'http://localhost:8081/api/notes';

export const getNotes = () => {
    return axios.get(BASE_URL);
};

export const createNote = (note) => {
    return axios.post(BASE_URL, note);
};

export const updateNote = (id, note) => {
    return axios.put(`${BASE_URL}/${id}`, note);
};

export const deleteNote = (id) => {
    return axios.delete(`${BASE_URL}/${id}`);
};