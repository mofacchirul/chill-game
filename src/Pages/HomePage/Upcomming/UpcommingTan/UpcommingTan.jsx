
import PublicAxios from '../../../../Axios/PublicAxios/PublicAxios';
import { useQuery } from '@tanstack/react-query';

const UpcommingTan = () => {
  
const axios = PublicAxios();
const {data:tournamentes,isLoading:loading}=useQuery({
    queryKey:['tournaments'],
    queryFn:async()=>{
        const res= await axios.get('/tournaments')
        return res.data;
    }

})



    return [tournamentes,loading]
};

export default UpcommingTan;