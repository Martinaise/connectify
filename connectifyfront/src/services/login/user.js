import axios from "axios";
export async function loginUser(user) {
    const data = axios.post("http://localhost:5001/api/user/login", { email: user.email, password: user.password });
    return data;
}