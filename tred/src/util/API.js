import axios from "axios";

export default{
    getUsers: ()=>{
        axios.get("https://randomuser.me/api/?results=50&inc=picture&inc=name&inc=email&inc=phone&inc=dob")
            .then(function res(){
                console.log(res);
                return JSON.stringify(res);
            });
    }

};