import axios from "axios";
export async function RegistUser(user) {
    const data = axios.post("http://localhost:5001/api/user/register", user);
    return data;
}