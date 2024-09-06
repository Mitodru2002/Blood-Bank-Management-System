import moment from "moment";
import React, { useEffect, useState } from "react";
import "../../src/styles/GetDonar.css";
import Layout from "../components/Layouts/Layout";
import API from "../services/api";
const Donars = () => {
  const [data, setData] = useState([]);
  const getDoners = async (req, res) => {
    try {
      const { data } = await API.get("/inventory/get-donars");
      // console.log(data);
      if (data?.success) {
        setData(data?.donars);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "unable to get Donars data ",
        error,
      });
    }
  };
  useEffect(() => {
    getDoners();
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
                  <th scope="col">Date & Time</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((record) => (
                  <tr key={record._id}>
                    <td>{record.name || record.organisationName + "(ORG)"}</td>
                    <td>{record.email}</td>
                    <td>{record.phone}</td>
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

export default Donars;
