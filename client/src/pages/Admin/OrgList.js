import moment from "moment";
import React, { useEffect, useState } from "react";
import Layout from "../../../src/components/Layouts/Layout";
import API from "../../services/api";

const OrgList = () => {
  const handleDelete = async (id) => {
    try {
      let answer = window.prompt(
        "are you sure you want to delete",
        "Yes Delete It"
      );
      if (!answer) return;
      const { data } = await API.delete(`/admin/delete-organisation/${id}`);
      alert(data?.message);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const [data, setData] = useState([]);
  const getOrgList = async (req, res) => {
    try {
      const { data } = await API.get("/admin/org-list");
      // console.log(data);
      if (data?.success) {
        setData(data?.orgList);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "unable to get hospital data ",
        error,
      });
    }
  };
  useEffect(() => {
    getOrgList();
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
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((record) => (
                  <tr key={record._id}>
                    <td>{record.organisationName}</td>
                    <td>{record.email}</td>
                    <td>{record.phone}</td>
                    <td>
                      {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
                    </td>
                    <td>
                      <button
                        className="btn-danger"
                        onClick={() => {
                          handleDelete(record._id);
                        }}
                      >
                        Delete
                      </button>
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

export default OrgList;
