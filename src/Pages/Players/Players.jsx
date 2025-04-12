import { useQuery } from "@tanstack/react-query";
import PublicAxios from "../../Axios/PublicAxios/PublicAxios";
import Loading from "../../Loading/Loading";
import BannerHook from "../../Hook/BannerHook/BannerHook";
import { Link } from "react-router-dom";

const Players = () => {
        const axios =PublicAxios()
        const {data:Players, isloading:loading} = useQuery({
            queryKey:['players'],
            queryFn: async () => {
                const res = await axios.get('/player')
                return res.data;
            }
        })
        if(loading){
            <Loading></Loading>
        }

    return (
        <div className=" ">
           <BannerHook titel={'Players'} descriptions={'Players '} ></BannerHook>
              <div className="grid max-w-5xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mb-10">
                {
                 Players?.map((player, index) => (
                      <div key={index} className="card w-96 mx-auto space-y-1  shadow-xl">
                            <figure><img src={player.img} alt="Shoes" className="rounded-t-4xl w-72 " /></figure>
                            <div className='bg-[#000435] text-center w-72 mx-auto   py-3 border-t-4 border-orange-300 rounded-4xl border-solid'>
                            <h1 className='text-xl uppercase font-bold'>{player.playerName}</h1>
                            <p className='text-[#a712e4]  '>{player.level}LEVEL COMPLETED</p>
                            <div className='mt-3 flex items-center justify-center gap-2'>
                            <span className='border-2 border-solid w-10 block border-[#a712e4] hover:text-white '></span>
                          <Link to={`/players_detels/${player._id}`}> 
                          <button className='uppercase'>
                                Read More <span className='text-[#a712e4] hover:text-white'>
                                .......
                                </span>
                            </button>
                          </Link>
                           </div>
                        </div>
                      </div>
                 ))
                }   
        </div>
        </div>
    );
};

export default Players;