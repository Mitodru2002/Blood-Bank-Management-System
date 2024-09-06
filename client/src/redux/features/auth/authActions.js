import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import API from "../../../services/api";

// getting the data from login
export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ role, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("auth/login", { role, email, password });
      //store the token
      if (data.success) {
        localStorage.setItem("token", data.token);
        window.location.replace("/");
        // alert("login successful");
        toast.success(data.message);
      }
      return data;
    } catch (error) {
      if (error.response && error.response.data.massage) {
        return rejectWithValue(error.response.data.massage);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// getting data form Register
export const userRegister = createAsyncThunk(
  "auth/register",
  async (
    {
      email,
      password,
      role,
      name,
      hospitalName,
      address,
      phone,
      organisationName,
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await API.post("auth/register", {
        email,
        password,
        role,
        name,
        hospitalName,
        organisationName,
        address,
        phone,
      });
      if (data?.success) {
        window.location.replace("/login");
        alert("register successfully");
        // toast.success(data.message);
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.massage) {
        return rejectWithValue(error.response.data.massage);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//current-user
export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async ({ rejectWithValue }) => {
    try {
      const res = await API.get("auth/current-user");
      if (res?.data) {
        return res?.data;
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.massage) {
        return rejectWithValue(error.response.data.massage);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
