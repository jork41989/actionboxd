import axios from 'axios'; 

export const getActor = (id) => {
    return axios.get(`/api/actors/${id}`)
}



export const newActor = (data) => {
    return axios.post(`/api/actors/newActor`, data)
}