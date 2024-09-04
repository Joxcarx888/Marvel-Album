import CryptoJS from "crypto-js";

export const reqCharacters = async (offset = 0) => {
    const limit = 20;
    const timeStamp = new Date().getTime();
    const PRIVATE_API_KEY = '907e7b8a8dbe6f7b0c027182377df387f85721b5';
    const PUBLIC_API_KEY = 'ed0b8fe1c2a441f3134cd97f4e87755c';
    const hash = CryptoJS.MD5(timeStamp + PRIVATE_API_KEY + PUBLIC_API_KEY).toString();

    const api_url = `https://gateway.marvel.com:443/v1/public/characters?limit=${limit}&offset=${offset}&ts=${timeStamp}&apikey=${PUBLIC_API_KEY}&hash=${hash}`;

    const resp = await fetch(api_url);
    const { data } = await resp.json();

    return data;
};
