
import React,{useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";


export default function Login() {

const [users,setUsers]=useState();
const [loading, setLoading] = useState(false);
const [name,setName]=useState('');
const [password,setPassword]=useState('');
let componentMounted = true;

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (componentMounted) {
        setUsers(await response.clone().json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
        console.log(users)
      };
    };
    getUsers();
    
  }, []);

const Find = () =>{}


  return (
    
    <div className="limiter" id="login">
      <div
        className="container-login100"
        style={{
          backgroundImage:
            "url(https://media.gq.com/photos/629fb9435de8bd3714a3b9fd/master/w_2000,h_1333,c_limit/kapital_soho-14.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-5 col-md-offset-1">
              <div className="login_topimg"></div>
              <div className="wrap-login100">
                <form className="login100-form validate-form">
                  {" "}
                  <span className="login100-form-title "> Login </span>{" "}
                  <span className="login100-form-subtitle m-b-16">
                    {" "}
                    to your account{" "}
                  </span>
                  <div
                    className="wrap-input100 validate-input m-b-16"
                    data-validate="Valid email is required: ex@abc.xyz"
                  >
                    <input
                      className="input100"
                      type="text"
                      name="Username"
                      placeholder="Username"
                      onChange={(event)=>{ setName(event.target.value)}}
                    />{" "}
                    <span className="focus-input100"></span>{" "}
                    <span className="symbol-input100">
                      {" "}
                      <span className="glyphicon glyphicon-user"></span>{" "}
                    </span>{" "}
                  </div>
                  <div
                    className="wrap-input100 validate-input m-b-16"
                    data-validate="Password is required"
                  >
                    {" "}
                    <input
                      className="input100"
                      type="password"
                      name="pass"
                      placeholder="Password"
                      onChange={(event) => { setPassword(event.target.value)}}
                    />{" "}
                    <span className="focus-input100"></span>{" "}
                    <span className="symbol-input100">
                      {" "}
                      <span className="glyphicon glyphicon-lock"></span>{" "}
                    </span>{" "}
                  </div>
                  <div className="flex-sb-m w-full p-b-30">
                    <div className="contact100-form-checkbox">
                      <input
                        className="input-checkbox100"
                        id="ckb1"
                        type="checkbox"
                        name="remember-me"
                      />
                      <label className="label-checkbox100" htmlFor="ckb1">
                        Remember me
                      </label>
                    </div>
                    <div>
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        {" "}
                        Forget password?
                      </NavLink>
                    </div>
                  </div>
                  <div className="container-login100-form-btn p-t-25">
                    <button type="button" class="btn btn-primary" onClick={{}}>Connect</button>  
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
