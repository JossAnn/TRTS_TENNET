import {useEffect, useState} from 'react'
import DataContainers from './DataContainers';

function CardContainer() {

    const [info, setInfo] = useState([]);

    const InitialUrl = "https://rickandmortyapi.com/api/character";

    const FetchData = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => setInfo(data.results))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        FetchData(InitialUrl);
    }, [])

  return (
    <div className='w-full col-span-8'>
        <DataContainers info={info}/>
    </div>
  )
}

export default CardContainer;