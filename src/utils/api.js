import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTcyMWVjNzAyNmNmNTVjYjFiYzFlYTY5NzI1NDI4NiIsInN1YiI6IjY0NGUzMWVhNGQyM2RkMTViYTkyY2UyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FBXkZf4zkoQldmHUAIYMK8cudIsap4oChd0QC2CgV6c"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};