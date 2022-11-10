
import axios from 'axios';
import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Register = () =>{

    const navigate = useNavigate();
    const user = useAuth();

    useEffect(()=>{
        if(user) navigate('/');
    }, [user]);

    const [nombres, setNombres] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e)=>{
        e.preventDefault();
        const {data} = await axios.post('http://127.0.0.1:1802/api/auth/register',{
            nombres, correo, password
        });
        if(data.error==0){
            localStorage.setItem('user_token', data.token);
            navigate('/');
        }else{
            alert(data.msg);
        }
    }

    return(
        <div className='Login'>
            <form onSubmit={handleRegister}>
                <br/> Nombres
                <input required onChange={(e)=>{setNombres(e.target.value)}}/>
                <br/> Correo
                <input required onChange={(e)=>{setCorreo(e.target.value)}}/>
                <br/> Contraseña
                <input required onChange={(e)=>{setPassword(e.target.value)}}/><br/>
                <button type={'submit'}>Register</button>
            </form>
        </div>
    )
}


export default Register