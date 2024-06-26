import { useState } from "react";
import "./login.css";
import { useLoginContext } from "../../context/LoginContext";

export default function LoginView() {
  const { handleLogin, errorMessage } = useLoginContext();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="container-login w-25 ">
        <form class="  form-group" onSubmit={(e) => handleLogin(e, login)}>
          <h2 className="title-login text-center animate__animated animate__bounce">
            Accede a tu cuenta
          </h2>
          <label for="exampleInputEmail1">Email</label>
          <input
            onChange={handleChange}
            value={login.email}
            name="email"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Introduce tu email"
          />
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              onChange={handleChange}
              value={login.password}
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Y tu password"
            />
            {errorMessage && <p> Username or password incorrect!! </p>}
          </div>
          <button
            type="submit"
            className="subTitle-login btn z-depth-3 w-100 lime accent-4 text-capitalize"
            style={{ marginTop: "4vh" }}
          >
            Accede
          </button>
        </form>
      </div>
    </div>
  );
}
