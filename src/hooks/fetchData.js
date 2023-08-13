import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (param) => {
    const [data, setData] = useState([]);

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
                const response = await axios.request(options);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    return [data, setData];
}

export default useFetchData;