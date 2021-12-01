import axios from "axios";
const url = "http://localhost:5000/";
const booking = "bookings"

export function getCrudBookings(callback){
  axios.get(url + booking)
  .then((res)=> {
    callback(res);
  })
  .catch((err)=>{
    console.log(err);
  })
}