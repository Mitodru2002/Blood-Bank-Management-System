import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layouts/Layout";
import API from "../services/api";

const Organisation = () => {
  const [data, setData] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const getOrganisations = async (req, res) => {
    try {
      if (user?.role === "user") {
        const { data } = await API.get("/inventory/get-organisation");
        // console.log(data);
        if (data?.success) {
          setData(data?.organisations);
        }
      }
      if (user?.role === "hospital") {
        const { data } = await API.get(
          "/inventory/get-organisation-for-hospital"
        );
        // console.log(data);
        if (data?.success) {
          setData(data?.organisations);
        }
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "unable to get organisation data ",
        error,
      });
    }
  };
  useEffect(() => {
    getOrganisations();
    // eslint-disable-next-line
  }, [user]);
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
                    <td>{record.organisationName}(ORG)</td>
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

export default Organisation;
