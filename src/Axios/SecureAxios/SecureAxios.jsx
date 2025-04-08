import axios from "axios";


const SecureAxios = () => {
    const SecureAxios= axios.create({
        baseURL:"http://localhost:5000"
    })
    return  SecureAxios
};

export default SecureAxios;