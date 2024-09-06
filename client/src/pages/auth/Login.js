import React from "react";
// eslint-disable-next-line
import { useSelector } from "react-redux";
// import InputType from "../../components/shared/form/InputType";
import "../../../src/styles/logReg.css";
import Form from "../../components/shared/form/reuseForm";
import Spinner from "../../redux/features/Spinner";

const Login = () => {
  // eslint-disable-next-line
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="login-form">
          <div className="col-md-8 login-img">
            <img src="./images/loginbg.jpg" alt="" />
          </div>
          <div className=" col-md-4 form-container">
            <Form
              formTitle={"Login Form"}
              submitBtn={"Login"}
              formType={"login"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
