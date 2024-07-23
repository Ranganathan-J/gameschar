import axios from "axios"

const api_key = "9cd809a79ea944539b73d83c2222d2bb"

const axiosCreate = axios.create({
    baseURL: `https://api.rawg.io/api`
})

const getGenreList = () => axiosCreate.get(`/genres?key=${api_key}`)
const getGameList = () => axiosCreate.get(`/games?key=${api_key}`)
const getGameListbyGenre = (id) => axiosCreate.get(`/games?key=${api_key}&genres=${id}`)
export default{
    getGenreList,
    getGameList,
    getGameListbyGenre
}