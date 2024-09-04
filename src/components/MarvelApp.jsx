import React, { useState } from 'react';
import { useCharacters } from '../hooks/useCharacters';


export const MarvelApp = () => {
    const [offset, setOffset] = useState(0);
    const { characters, formatImageUrl } = useCharacters(offset);

    const handleNext = () => {
        setOffset(prevOffset => prevOffset + 20);
    };

    const handlePrevious = () => {
        setOffset(prevOffset => Math.max(0, prevOffset - 20));
    };

    return (
        <>
            <div className='d-flex flex-row row row-cols-5'>
                {
                    characters &&
                    characters.map((char) => (
                        <div key={char.id} className="card m-3 shadow-sm" style={{ width: '14rem', borderRadius: '10px', overflow: 'hidden' }}>
    <img src={formatImageUrl(char)} className="card-img-top" alt={char.name} style={{ height: '12rem', objectFit: 'cover' }} />
    <div className="card-body text-center p-3" style={{ backgroundColor: '#f8f9fa' }}>
        <h5 className="card-title mb-0" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{char.name}</h5>
    </div>
</div>

                    ))
                }
            </div>
            
            <div className="position-absolute mt-5 start-50 translate-middle-x">
                <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <button className="page-link" onClick={handlePrevious} disabled={offset === 0}>Previous</button>
                    </li>
                    <li className="page-item">
                        <button className="page-link" onClick={handleNext}>Next</button>
                    </li>
                </ul>
                </nav>
            </div>
            
        </>
    );
}


 
 