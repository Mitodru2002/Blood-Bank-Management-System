import moment from "moment";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layouts/Layout";
import API from "../services/api";

const Hospitals = () => {
  const [data, setData] = useState([]);
  const getHospitals = async (req, res) => {
    try {
      const { data } = await API.get("/inventory/get-hospitals");
      // console.log(data);
      if (data?.success) {
        setData(data?.hospitals);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "unable to get hospitals data ",
        error,
      });
    }
  };
  useEffect(() => {
    getHospitals();
  }, []);
  return (
    <>
      <Layout>
        <div className="getTable">
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">address</th>
                  <th scope="col">Date & Time</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((record) => (
                  <tr key={record._id}>
                    <td>{record.hospitalName}</td>
                    <td>{record.email}</td>
                    <td>{record.phone}</td>
                    <td>{record.address}</td>
                    <td>
                      {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Hospitals;
