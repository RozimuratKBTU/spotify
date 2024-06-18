import api from './api';

export const getMusics = async () => {
    try {
        const response = await api.get('/api/music');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getAuthors = async () => {
    try {
        const response = await api.get('/api/author');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getPlaylists = async () => {
    try {
        const response = await api.get('/api/playlist');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}