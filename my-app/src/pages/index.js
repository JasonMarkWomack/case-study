import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });
const axios = require('axios');
const id = "4f6a6ece-691e-42f2-bb20-c46df2413115"; 
const API_KEY = '2a911e1c-8e20-40c9-b953-e8b23aa5b030';
  axios.get(`https://api.vapi.ai/call/${id}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`
    }
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });


  <button onClick={handleClick}>Click for Science</button>

