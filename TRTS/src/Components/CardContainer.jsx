import React, { useState, useEffect } from 'react';
import DataContainers from './DataContainers';

function CardContainer() {
    const [info, setInfo] = useState([]);
    const userId = localStorage.getItem('user_id');
    const [selectedContainerId, setSelectedContainerId] = useState(null);

    const handleContainerSelect = (containerId) => {
        setSelectedContainerId(containerId);
    }

    const FetchData = () => {
        if (userId) {
            const url = `http://127.0.0.1:6000/containers?user_id=${userId}`;
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
            <DataContainers info={info} onSelectContainer={handleContainerSelect} />
        </div>
    );
}

export default CardContainer;
