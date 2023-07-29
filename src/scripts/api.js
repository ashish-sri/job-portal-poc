import axios from 'axios';

export default{
    async getAllJobs(){
        try{
            const response=await axios.get(MOCKAPI_URL);
            return response.data;
        }catch(err){
            console.log(err.message)
            return [];
        }
    },

    async getJob(id){
        try{
            const response=await axios.get(MOCKAPI_URL+"/"+id);
            return response.data;
        }catch(err){
            console.log(err.message)
            return false;
        }
    },

    async addJob(data){
        try{
            let response=await axios.post(
                MOCKAPI_URL,
                data
            );
            console.log(response);
            return true;
        }catch(err){
            console.log(err.message)
            return false;
        }
    },

    async deleteJob(id){
        try{
            let response=await axios.delete(MOCKAPI_URL+"/"+id)
            console.log(response);
            return true;
        }catch(err){
            console.log(err.message)
            return false;
        }
    },

    async modifyJob(id,data){
        try{
            let response=await axios.patch(MOCKAPI_URL+"/"+id,{data:data});
            console.log(response);
            return true;
        }catch(err){
            console.log(err.message)
            return false;
        }
    }
}

const MOCKAPI_URL="https://64be5bd95ee688b6250c42bd.mockapi.io/api/v1/jobs";
