
import axios from 'axios';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () =>{

    const navigate = useNavigate();
    const user = useAuth();

    useEffect(()=>{
        if(user) navigate('/');
    }, [user]);

    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e)=>{
        e.preventDefault();
        const {data} = await axios.post('http://127.0.0.1:1802/api/auth/login',{
            correo, password
        });
        console.log(data)
    }

    return(
        <div className='Login'>
            <form onSubmit={handleLogin}>
                Correo
                <input required onChange={(e)=>{setCorreo(e.target.value)}}/>
                <br/> Contraseña
                <input required onChange={(e)=>{setPassword(e.target.value)}}/><br/>
                <button type={'submit'}>Login</button>
            </form>
        </div>
    )
}

export default Login