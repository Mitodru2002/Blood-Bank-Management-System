import React from "react";
import { useSelector } from "react-redux";
// import ChatBot from "../chat_bot/chatBot";
import Layout from "../components/Layouts/Layout";
import Container from "../components/Layouts/container";
import Spinner from "../redux/features/Spinner";
import ChatBot from "./ChatBot";

const HomePage = () => {
  const { loading } = useSelector((state) => state.auth);
  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="section">
            <Container />
          </div>
          <div className="chatbot">
            <ChatBot />
          </div>
        </>
      )}
    </Layout>
  );
};

export default HomePage;
