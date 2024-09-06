import moment from "moment";
import React, { useEffect, useState } from "react";
import API from "../services/api";

export default function GetData() {
  const [data, setData] = useState([]);

  const getBloodRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-inventory");
      if (data?.success) {
        setData(data?.inventory);
        // console.log(data);
      }
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
    }
  };

  useEffect(() => {
    getBloodRecords();
  }, []);

  return (
    <>
      <div className="table">
        <table>
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
            {data?.map((record) => (
              <tr key={record._id}>
                <td>{record.bloodGroups}</td>
                <td>{record.InventoryType}</td>
                <td>{record.quantity} (ML)</td>
                <td>{record.email}</td>
                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
