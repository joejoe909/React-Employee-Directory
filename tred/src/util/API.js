import axios from "axios";

export default{
    getUsers: ()=>{
        axios.get("https://randomuser.me/api/?results=50")
            .then(res=>{
                console.log(res);
                console.log(res.data);
                let empList = res.data;
                console.log(empList);
                return(empList);
            });
    }

};