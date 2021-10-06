import axios from "axios";

const getAll = () => {
    const request = axios.get("https://restcountries.com/v2/all")
    return request.then(response => response.data)
}

const countriesService = { getAll }

export default countriesService