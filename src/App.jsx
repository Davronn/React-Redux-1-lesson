import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Students from "./pages/Students";
import Profile from "./pages/Profile";
import Loginteat from "./pages/Logintest";
import { Provider } from "react-redux";
import store from "./store/store.js";

const App = () => {

  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            {/* <Route path="/" element={<Loginteat />} /> */}
            <Route path="/" element={<Login />} />
            <Route path="/students" element={<Students />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
};

export default App;
