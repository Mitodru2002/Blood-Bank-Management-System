import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../../redux/features/auth/authActions";
import API from "../../services/api";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();

  const getUser = async () => {
    try {
      const { data } = await API.get("/auth/current-user");
      if (data?.success) {
        dispatch(getCurrentUser(data));
      }
    } catch (error) {
      localStorage.clear();
      console.log(error);
    }
  };
  //change the state effect and dispatch the action
  useEffect(() => {
    getUser();
  });
  //authentication for the current user token based
  if (localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
