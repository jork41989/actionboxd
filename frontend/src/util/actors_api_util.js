import axios from 'axios'; 

export const getActor = (id) => {
    return axios.get(`/api/actors/${id}`)
}
