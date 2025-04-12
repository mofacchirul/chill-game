import axios from "axios";


const SecureAxios = () => {
    const SecureAxios= axios.create({
        baseURL:"https://chill-game-server-sigma.vercel.app"
    })
    return  SecureAxios
};

export default SecureAxios;