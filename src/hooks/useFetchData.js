import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (param) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: param,
            headers: {
                Authorization: '',
                'X-API-Key': '',
                'X-API-Host': ''
            }
        };

        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.request(options);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        }
        fetchData();
    }, [param]);

    return [data, loading, setData];
}

export default useFetchData;