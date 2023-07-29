import axios from 'axios';

export default{
    async getAllJobs(){
        try{
            const response=await axios.get("https://64be5bd95ee688b6250c42bd.mockapi.io/api/v1/jobs");
            return response.data;
        }catch(err){
            console.log(err.message)
            return [];
        }
    },

    async getJob(id){
        try{
            const response=await axios.get("https://64be5bd95ee688b6250c42bd.mockapi.io/api/v1/jobs"+"/"+id);
            return response.data;
        }catch(err){
            console.log(err.message)
            return false;
        }
    },

    async addJob(data){
        try{
            let response=await axios.post(
                "https://64be5bd95ee688b6250c42bd.mockapi.io/api/v1/jobs",
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
            let response=await axios.delete("https://64be5bd95ee688b6250c42bd.mockapi.io/api/v1/jobs"+"/"+id)
            console.log(response);
            return true;
        }catch(err){
            console.log(err.message)
            return false;
        }
    },

    async modifyJob(id,data){
        try{
            let response=await axios.patch("https://64be5bd95ee688b6250c42bd.mockapi.io/api/v1/jobs"+"/"+id,{data:data},{headers: { 'Content-Type': 'application/json' }});
            console.log(response);
            return true;
        }catch(err){
            console.log(err.message)
            return false;
        }
    }
}
