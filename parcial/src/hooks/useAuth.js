
import {useState, useEffect} from 'react'
import axios from 'axios'

function useAuth(){
    const [user, setUser] = useState(undefined);

    useEffect(()=>{
        getUser();
    }, []);

    const getUser = async () => {
        var token = localStorage.getItem('user_token');
        if(token){
            var {data} = await axios.post('http://127.0.0.1:1802/api/auth', {},{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUser(data.user);
        }
    }

    return user;
}

export default useAuth;

