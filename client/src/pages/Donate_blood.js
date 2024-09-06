import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "../../src/styles/Donate_blood.css";
import Layout from "../components/Layouts/Layout";
import API from "../services/api";
import GetData from "./getData";

export default function Donate_blood() {
  const [InventoryType, setInventoryType] = useState("in");
  const [bloodGroups, setBloodGroups] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState("");
  const { user } = useSelector((state) => state.auth);

  //save data in database
  const handleAdd = async () => {
    try {
      // e.preventDefault();
      if (!bloodGroups || !quantity) {
        return alert("Please Provide All Fields");
      }
      const { data } = await API.post("/inventory/create-inventory", {
        email,
        organisation: user?._id,
        InventoryType,
        bloodGroups,
        quantity,
      });
      if (data?.success) {
        toast.success("New Record Created");
        window.location.reload();
      }
    } catch (error) {
      toast.error(error.response.data.message);
      alert(error.response.data.message);
      window.location.reload();
    }
  };

  return (
    <>
      <Layout>
        <div className="donateBloodimg"></div>
        <div className="blood-section">
          <div className="form-check-blood" name="doanteBlood" id="doanteBlood">
            <b className="text">Blood Type:</b>
            <input
              className="form-select"
              type="radio"
              value={"in"}
              name="Radio"
              onChange={(e) => {
                setInventoryType(e.target.value);
              }}
              defaultChecked
            />
            <label htmlFor="in" className="form-check-label text">
              IN
            </label>
            <input
              className="form-select"
              type="radio"
              name="Radio"
              value={"out"}
              onChange={(e) => setInventoryType(e.target.value)}
            />
            <label htmlFor="out" className="form-check-label text">
              OUT
            </label>
          </div>

          <div className="input_table">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => {
                setBloodGroups(e.target.value);
              }}
            >
              <option defaultValue={"Open this select Blood Group"}>
                Open this select Blood Group
              </option>
              <option value={"O+"}>O+</option>
              <option value={"O-"}>O-</option>
              <option value={"A+"}>A+</option>
              <option value={"A-"}>A-</option>
              <option value={"B+"}>B+</option>
              <option value={"B-"}>B-</option>
              <option value={"AB+"}>AB+</option>
              <option value={"AB-"}>AB-</option>
            </select>
            {InventoryType === "in" ? (
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-select"
              />
            ) : (
              <input
                type="email"
                placeholder="Enter your hospital email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-select"
              />
            )}
            {InventoryType === "out" ? (
              <input
                type="text"
                placeholder="Enter the blood quantity you want "
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="form-select"
              />
            ) : (
              <input
                type="text"
                placeholder="Enter the blood quantity To Donate"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="form-select"
              />
            )}

            {InventoryType === "in" && <button onClick={handleAdd}>Add</button>}

            {InventoryType === "out" && (
              <button onClick={handleAdd}>Get Blood</button>
            )}
          </div>

          <div className="bloodInvenTable" style={{ margin: "2rem" }}>
            <GetData />
          </div>
        </div>
      </Layout>
    </>
  );
}
