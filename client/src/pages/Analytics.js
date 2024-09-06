import moment from "moment";
import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import "../../src/styles/Donate_blood.css";
import Layout from "../components/Layouts/Layout";
import API from "../services/api";

const Analytics = () => {
  const [data, setData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);
  // const { user } = useSelector((state) => state.auth);
  const getBloodGroupRecords = async () => {
    try {
      const { data } = await API.get("/analytics/get-analytics");
      if (data?.success) {
        setData(data?.BloodgroupsData);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBloodGroupRecords();
  }, []);

  //get top 3 blood groups recent records
  const getBloodRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-recent-inventory");
      if (data?.success) {
        setInventoryData(data?.inventory);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodRecords();
  }, []);

  return (
    <>
      <Layout>
        <div className="get-table">
          <div className="head">
            <h1>Recent Top 3 Blood Transactions</h1>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Blood Group</th>
                <th scope="col">Inventory Type</th>
                <th scope="col">Quantity</th>
                <th scope="col">Donar Email</th>
                <th scope="col">TIme & Date</th>
              </tr>
            </thead>
            <tbody>
              {inventoryData?.map((record) => (
                <tr key={record._id}>
                  <td>{record.bloodGroups}</td>
                  <td>{record.InventoryType}</td>
                  <td>{record.quantity} (ML)</td>
                  <td>{record.email}</td>
                  <td>
                    {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="cards">
          {data?.map((record) => (
            <div key={record.id} className="blood-card">
              <div className="blood-card-body">
                <h5 className="blood-card-head">
                  Blood Groups :{" "}
                  <span className="blood_group">{record.bloodGroups}</span>
                </h5>
                <p className="blood-card-text">
                  Total IN :- {record.totalIn} (ML)
                </p>
                <p className="blood-card-text">
                  Total Out :- {record.totalOut} (ML)
                </p>
                <p className="blood-card-text">
                  Total Blood available :- {record.availabeBlood} (ML)
                </p>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Analytics;
