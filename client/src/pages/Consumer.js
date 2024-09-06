import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../../src/styles/GetDonar.css";
import Layout from "../components/Layouts/Layout";
import API from "../services/api";

const Consumer = () => {
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);

  //Geting hospital amount of blood OUT from the database
  const getHospitalBloodRecords = async () => {
    try {
      const { data } = await API.post("/inventory/get-hospital-inventory", {
        filters: {
          InventoryType: "out",
          hospital: user?._id,
        },
      });
      if (data?.success) {
        setData(data?.inventory);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHospitalBloodRecords();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Layout>
        <div className="getTable">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Blood Group</th>
                <th scope="col">Inventory TYpe</th>
                <th scope="col">Quantity</th>
                <th scope="col">Email</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((record) => (
                <tr key={record._id}>
                  <td>{record.bloodGroups}</td>
                  <td>{record.InventoryType}</td>
                  <td>{record.quantity}</td>
                  <td>{record.email}</td>
                  <td>
                    {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  );
};

export default Consumer;
