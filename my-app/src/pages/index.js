import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const axios = require('axios');
const API_KEY = '2a911e1c-8e20-40c9-b953-e8b23aa5b030';

const res = await axios.get('https://api.vapi.ai/assistant', {
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
});




const handleClick = (e) =>  {
  console.log('rando');
  console.log(e);
}

const makeCall = () => (

  <div>
      <button onClick={handleClick}>Add</button>
  </div>

)
export default makeCall;