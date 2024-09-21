import axios from "axios";

export async function fetchMovies() {
    const res = await axios.get(process.env.API_URL + "/movie");
    return res
}