import { useEffect, useState } from "react";
import { reqCharacters } from "../services/characters";

export const useCharacters = (offset = 0) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        reqCharacters(offset).then((data) => {
            setCharacters(data.results);
        });
    }, [offset]); // Volver a ejecutar cuando el offset cambie

    const formatImageUrl = (char) => {
        const imagePath = char.thumbnail;
        const url_image = `${imagePath.path}.${imagePath.extension}`;
        return url_image;
    }

    return {
        characters,
        formatImageUrl
    }
}
