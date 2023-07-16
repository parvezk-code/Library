import axios from 'axios';

export const remoteAPI =  axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com',
   timeout: 1000,
   Headers:{ Authentication: 'Auth Token'}
});

export const getUsers = async (term)=>{
    try{
        const res = await remoteAPI.get('/users', {params:{query:term}})
        console.log(res);
    }
    catch (error){
        console.log(error);
    }
}
