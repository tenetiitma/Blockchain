import { API_KEY, BASE_URL, RAPID_API_HOST } from "../environment.js";

const options = {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': RAPID_API_HOST,
};

// tegime funktsiooni asünkroonseks, siis saame kasutada 'await'-i
// try-catch ainult siis, kui on async-await.
export const getCoins = async () => {
    try {
        const response = await fetch(`${BASE_URL}/coins`, { headers: options });
        return response.json();
    } catch  {
         console.log(error);
    }
};

export const getCoin = async (uuid) => {
    try {
        const response = await fetch(`${BASE_URL}/coin/${uuid}`, { 
            headers: options,
        });
        return response.json();
    } catch (error) {
         console.log(error);
    }
};

export const getHistory = async (uuid) => {
    try {
        const response = await fetch(`${BASE_URL}/coin/${uuid}/history`, {
            headers: options,
        })
        return response.json();
    } catch (error) {
        console.log(error);
    }
};