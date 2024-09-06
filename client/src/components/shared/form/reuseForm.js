import React, { useState } from "react";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../services/authServices";
import InputType from "./InputType";

const Form = ({ formType, formTitle, submitBtn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [name, setName] = useState("");
  const [Hospital, setHospital] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          if (formType === "login")
            return handleLogin(e, email, password, role);
          else if (formType === "register")
            return handleRegister(
              e,
              email,
              password,
              role,
              name,
              Hospital,
              organisationName,
              address,
              phone
            );
        }}
      >
        <h1 className="title-form">{formTitle}</h1>
        <hr />

        {/* radio buttons */}
        <div className="d-flex radio-buttons">
          <div className="form-check ms-4">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              id="userRadio"
              value={"user"}
              onChange={(e) => {
                setRole(e.target.value);
              }}
              defaultChecked
            />
            <label
              className="form-check-label"
              htmlFor="userRadio"
              // eslint-disable-next-line
              // for="userRadio"
            >
              User
            </label>
          </div>
          <div className="form-check ms-4">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              id="adminRadio"
              value={"admin"}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            />
            <label
              className="form-check-label"
              htmlFor="adminRadio"
              // eslint-disable-next-line
              // for="userRadio"
            >
              admin
            </label>
          </div>
          <div className="form-check ms-4">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              id="hospitalRadio"
              value={"hospital"}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            />
            <label
              className="form-check-label"
              htmlFor="userRadio"
              // eslint-disable-next-line
              // for="hospitalRadio"
            >
              Hospital
            </label>
          </div>
          <div className="form-check ms-4">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              id="OrganisationRadio"
              value={"organisation"}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            />
            <label
              className="form-check-label"
              htmlFor="userRadio"
              // eslint-disable-next-line
              // for="hospitalRadio"
            >
              Organisation
            </label>
          </div>
        </div>

        {/* /* switchCase for targeting login and register seperatly  */}
        {(() => {
          // eslint-disable-next-line
          switch (true) {
            case formType === "login": {
              return (
                <>
                  <InputType
                    labelName={"Email"}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <InputType
                    labelName={"Password"}
                    labelFor={"forPassword"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </>
              );
            }
            case formType === "register": {
              return (
                <>
                  {(role === "user" || role === "admin") && (
                    <InputType
                      labelName={"Name"}
                      labelFor={"forName"}
                      inputType={"text"}
                      name={"Name"}
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  )}
                  {role === "hospital" && (
                    <InputType
                      labelName={"Hospital name"}
                      labelFor={"forHospital"}
                      inputType={"text"}
                      name={"Hospital"}
                      value={Hospital}
                      onChange={(e) => {
                        setHospital(e.target.value);
                      }}
                    />
                  )}
                  {role === "organisation" && (
                    <InputType
                      labelName={"Organisation name"}
                      labelFor={"forOrganisation"}
                      inputType={"text"}
                      name={"organisationName"}
                      value={organisationName}
                      onChange={(e) => {
                        setOrganisationName(e.target.value);
                      }}
                    />
                  )}
                  <InputType
                    labelName={"Email"}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <InputType
                    labelName={"Password"}
                    labelFor={"forPassword"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />

                  <InputType
                    labelName={"Address"}
                    labelFor={"foraddress"}
                    inputType={"text"}
                    name={"address"}
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                  <InputType
                    labelName={"Phone"}
                    labelFor={"forphone"}
                    inputType={"number"}
                    name={"phone"}
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </>
              );
            }
          }
        })()}
        <div className="d-flex">
          {formType === "login" ? (
            <div className="notRegister">
              <p>
                Not register yet ?&nbsp;
                <Link to="/Register">register now</Link>
              </p>
            </div>
          ) : (
            <div className="forLogin">
              <p>
                Already have a account ?&nbsp;
                <Link to="/Login">login here</Link>
              </p>
            </div>
          )}
        </div>
        <div className="d-flex">
          <button className="btn btn-primary" type="submit" value="submit">
            {submitBtn}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
