import React, { useState, useEffect } from 'react';
import DataContainers from './DataContainers';

function CardContainer() {
    const [info, setInfo] = useState([]);
    const userId = localStorage.getItem('user_id');

    const FetchData = () => {
        if (userId) {
            const url = `http://44.196.3.52:3006/container?user_id=${userId}`;
            fetch(url)
                .then(response => response.json())
                .then(data => setInfo(data))
                .catch(error => console.log(error));
        }
    }

    useEffect(() => {
        FetchData();
    }, [userId]);

    return (
        <div className='w-full col-span-8'>
            <DataContainers info={info} />
        </div>
    );
}

export default CardContainer;
