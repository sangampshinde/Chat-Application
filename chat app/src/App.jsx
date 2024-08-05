import axios from "axios"
import Register from "./register"

function App() {

  axios.defaults.baseURL ="http://localhost:4000";
  axios.defaults.withCredentials = true; // to send cookies with the requests
  


  return (
    <Register/>
  )

}

export default App
