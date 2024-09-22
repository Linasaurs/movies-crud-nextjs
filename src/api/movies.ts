import axios from "axios";

export async function fetchMovies() {
    const res = await axios.get(process.env.API_URL + "/movie");
    return res
}

export async function deleteMovie(id: number) {
    const res = await axios.delete(process.env.API_URL + `/movie/${id}`);
    return res
}

export async function createMovie(name: string, description: string) {
    const res = await axios.post(process.env.API_URL + `/movie`, {
        name: name,
        description: description,
    });
    return res;
}

export async function updateMovie(name: string, description: string, id: number) {
    const res = await axios.put(process.env.API_URL + `/movie/${id}`, {
        name: name,
        description: description,
    });
    return res;
}