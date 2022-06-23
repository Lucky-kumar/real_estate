import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
        const { data } = await axios.get((url), {
            headers: {
                'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
                'X-RapidAPI-Key': 'a41de40464msh2b2bcfa701ce8afp1f3f48jsn3594158afb76'
            }
        })
        return data;
}