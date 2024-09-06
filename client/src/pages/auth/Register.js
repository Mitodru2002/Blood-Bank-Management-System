import React from "react";
import { useSelector } from "react-redux";
import "../../../src/styles/logReg.css";
import Form from "../../components/shared/form/reuseForm";
import Spinner from "../../redux/features/Spinner";

const Register = () => {
  const { loading } = useSelector((state) => state.auth);
  return (
    <>
      {/* {<span>{toast.error(error)}</span>} */}
      {loading ? (
        <Spinner />
      ) : (
        <div className="register-form">
          <div className="col-md-8 register-img">
            <img src="./images/registerbg.jpg" alt="registerImg" />
          </div>
          <div className="col-md-4 form-container">
            <Form
              formTitle={"Register Form"}
              submitBtn={"Register"}
              formType={"register"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
