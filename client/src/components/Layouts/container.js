import React from "react";
import { BiDonateBlood } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../../src/styles/Home.css";
import Footer from "./Footer";
import Reviews from "./Reviews";

export default function Container() {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <div className="bg-image">
        <div className="container ">
          {user?.role === "organisation" && (
            <>
              <Link to="/inventory" className="card-link">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      <span>
                        <BiDonateBlood />
                      </span>
                      Blood Inventory
                    </h5>
                    <p className="card-text">
                      In this section you can find the blood group you want to
                      by and details related to it
                    </p>
                    <div className="btn btn-success">Donate</div>
                  </div>
                </div>
              </Link>
              <Link to="/donar" className="card-link">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Donar Details</h5>
                    <p className="card-text">
                      In this section you will get to know About Donar Details
                    </p>
                    <div className="btn btn-success">Donar Details</div>
                  </div>
                </div>
              </Link>
              <Link to="/hospitals" className="card-link">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Hospital Details</h5>
                    <p className="card-text">
                      In this section you can find the Details of the hoapitals
                    </p>
                    <div className="btn btn-success">Hospital Details</div>
                  </div>
                </div>
              </Link>
            </>
          )}
          {user?.role === "user" && (
            <>
              <Link to="/inventory" className="card-link">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      <span>
                        <BiDonateBlood />
                      </span>
                      Blood Inventory
                    </h5>
                    <p className="card-text">
                      In this section you can find the blood group you want to
                      by and details related to it
                    </p>
                    <div className="btn btn-success">Donate</div>
                  </div>
                </div>
              </Link>

              <Link to="/donar" className="card-link">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Donar Details</h5>
                    <p className="card-text">
                      In this section you will get to know About Donar Details
                    </p>
                    <div className="btn btn-success">Donar Details</div>
                  </div>
                </div>
              </Link>
            </>
          )}

          {user?.role === "hospital" && (
            <>
              {/* <Link to="/inventory" className="card-link">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      <span>
                        <BiDonateBlood />
                      </span>
                      Blood Inventory
                    </h5>
                    <p className="card-text">
                      In this section you can find the blood group you want to
                      by and details related to it
                    </p>
                    <div className="btn btn-success">Donate</div>
                  </div>
                </div>
              </Link> */}
              <Link to="/organisation" className="card-link">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Organisation Details</h5>
                    <p className="card-text">
                      In this section you can find the Details of the
                      organisation
                    </p>
                    <div className="btn btn-success">ORG Details</div>
                  </div>
                </div>
              </Link>
              <Link to="/consumer" className="card-link">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Consumer Details</h5>
                    <p className="card-text">
                      In this section you can find the Details of the
                      Consumer/Hospitals who get the blood from the database
                    </p>
                    <div className="btn btn-success">Consumer Details</div>
                  </div>
                </div>
              </Link>
            </>
          )}
          {user?.role === "admin" && (
            <>
              <Link to="/donar-list" className="card-link">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Donar List</h5>
                    <p className="card-text">
                      In this section you can find the Details of the
                      Consumer/Hospitals who get the blood from the database
                    </p>
                    <div className="btn btn-success">Donar Details</div>
                  </div>
                </div>
              </Link>
              <Link to="/hospital-list" className="card-link">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Hospital List</h5>
                    <p className="card-text">
                      In this section you can find the Details of the
                      Consumer/Hospitals who get the blood from the database
                    </p>
                    <div className="btn btn-success">hospital Details</div>
                  </div>
                </div>
              </Link>
              <Link to="/org-list" className="card-link">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Organisation List</h5>
                    <p className="card-text">
                      In this section you can find the Details of the
                      Consumer/Hospitals who get the blood from the database
                    </p>
                    <div className="btn btn-success">organisation Details</div>
                  </div>
                </div>
              </Link>
            </>
          )}
        </div>
        {(user?.role === "user" ||
          user?.role === "hospital" ||
          user?.role === "organisation") && <Reviews />}
        {(user?.role === "user" ||
          user?.role === "hospital" ||
          user?.role === "organisation") && <Footer />}
      </div>
    </>
  );
}
