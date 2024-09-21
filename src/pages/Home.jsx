import React from "react";
import HomeLandingPage from "../components/HomeLandingPage";
import HomeSection1 from "../components/HomeSection1";
import Destination from "../components/Destination";
import HomeSection3 from "../components/HomeSection3";
import Review1 from "../components/Review1";
import Footer from "../components/Footer";
import SearchAndFilter from "../components/SearchAndFilter";
import Chatbot from "../components/Chatbot";
import FeedbackForm from "../components/FeedbackForm";

function Home() {
  return (
    <div>
      <HomeLandingPage />
      <HomeSection1 />
      <div className="z-10">
        <Chatbot />
      </div>
      <SearchAndFilter />
      <Destination />
      <HomeSection3 />
      <Review1 />
      <FeedbackForm />
      <Footer />
    </div>
  );
}

export default Home;
