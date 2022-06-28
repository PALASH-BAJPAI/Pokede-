import {useEffect , useState} from "react";

const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setData(data);
            setLoading(false);
        }).catch(error => {
            setError(error);
            setLoading(false);
        }
        );
    } , [url]);
    return {data, loading, error};
}

export default useFetch;