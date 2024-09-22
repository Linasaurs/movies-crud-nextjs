import axios from "axios";

export async function fetchMovies() {
    const res = await axios.get(process.env.API_URL + "/movie");
    return res
}

export async function deleteMovie(id: number) {
    const res = await axios.delete(process.env.API_URL + `/movie/${id}`);
    return res
}