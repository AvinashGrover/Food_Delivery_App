import axios from "axios";

export const baseURL = 
"http://localhost:5001/food-delivery-app-815a0/us-central1/app"

export const validateUserJWTToken= async (token) => {
    try {
       const res = await axios.get(`${baseURL}/api/users/jwtVerfication`,{
        headers : {Authorization : "Bearer " + token}
       })
       return res.data.data;
    } catch (err) {
        return null;
    } 
 };