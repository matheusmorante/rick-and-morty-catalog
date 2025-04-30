import axios from 'axios';

export interface Character {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string
    },
    image: string
}

interface Response {
    info: {
        count: number,
        pages: number,
        next: string | null,
        prev: string | null
    };
    results: Character[];
}

export const getCharacterById = async (id: number):
    Promise<Character | null> => {
    try {
        const response = await axios
            .get(`https://rickandmortyapi.com/api/character/${id}`);
        return response.data
    } catch (error) {
        console.error('error:', error);
        return null;
    }
}

export const getCharacters = async (name:string, page: number):
    Promise<Response | null> => {
    try {
        const response = await axios
            .get(`https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`);
        return response.data
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}
