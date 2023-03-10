import "./login.css";
import { SiGooglemaps } from "react-icons/si";
import { useRef, useState } from "react";
import axios from "axios";
import { GiCancel } from "react-icons/gi";

function Login({ setShowLogin, myStorage, setCurrentUser }) {
  const [error, setError] = useState(false);
  const nameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      username: nameRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      const res = await axios.post("/users/login", user);
      myStorage.setItem("user", res.data.username);
      setCurrentUser(res.data.username);
      setShowLogin(false);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <div className="registerContainer">
      <div className="logo">
        <SiGooglemaps />
        BPPin
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" ref={nameRef} />
        <input type="password" placeholder="password" ref={passwordRef} />
        <button className="registerBtn">Login</button>
        {error && <span className="failure">Something went wrong!</span>}
      </form>
      <GiCancel
        className="registerCancel"
        onClick={() => setShowLogin(false)}
      />
    </div>
  );
}
export default Login;
