import {useEffect, useState} from 'react';

const useFetch=(url)=> {
    const [data, setData] = useState([]);
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(url)
            .then(res => { 
                if (!res.ok) {
                    throw Error('could not fetch the data for that resourse');
                }
                return res.json();
            })
            .then(data =>{
                setData(data);
                setisPending(false);
                setError(null);
            })
            .catch(err => {
                setisPending(false);
                setError(err.message);
            })

    }, [url]);
    return {data, isPending, error}
}

export default useFetch