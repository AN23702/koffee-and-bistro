import axios from "axios";
import { useEffect, useState } from "react";


const useCallApiPosts = (urlPost) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // call api
    useEffect(()=>{
        const getApi = async() => {
            try{
                // du lieu dang dc goi
                setIsLoading(true);
                const res =await axios.get(urlPost);
                // du lieu goi xong roi
                setData(res.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            };
        };
        getApi();
    },[urlPost]);

    return {data, isLoading};
}
export default useCallApiPosts;