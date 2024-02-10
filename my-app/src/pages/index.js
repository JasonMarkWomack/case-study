const axios = require('axios');
const id = "4f6a6ece-691e-42f2-bb20-c46df2413115"; 
export default function Home(){
 function handleClick  () {
  return axios.get(`https://api.vapi.ai/call/${id}`, {
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
};
return (

  function (d, t) {
    var g = document.createElement(t),
      s = d.getElementsByTagName(t)[0];
    g.src =
      "https://cdn.jsdelivr.net/gh/VapiAI/vapi-support-sdk/dist/assets/index.js";
    g.defer = true;
    g.async = true;
    s.parentNode.insertBefore(g, s);
  
    g.onload = function () {
      window.vapiSDK.run({
        apiKey: "d42e3113-751a-474d-837f-9c6e592a54a5", // required
        id: id      });
    };
  })(document, "script");

}
