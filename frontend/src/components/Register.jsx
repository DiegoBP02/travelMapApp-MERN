import "./register.css";
import { SiGooglemaps } from "react-icons/si";
import { useRef, useState } from "react";
import axios from "axios";
import { GiCancel } from "react-icons/gi";

function Register({ setShowRegister }) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      username: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      await axios.post("/users/register", newUser);
      setError(false);
      setSuccess(true);
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
        <input type="email" placeholder="email" ref={emailRef} />
        <input type="password" placeholder="password" ref={passwordRef} />
        <button className="registerBtn">Register</button>
        {success && (
          <span className="success">Successful! You can login now!</span>
        )}
        {error && <span className="failure">Something went wrong!</span>}
      </form>
      <GiCancel
        className="registerCancel"
        onClick={() => setShowRegister(false)}
      />
    </div>
  );
}
export default Register;
