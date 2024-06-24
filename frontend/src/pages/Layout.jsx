import React from "react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import "bulma/css/bulma.css";

export const Layout = ({ children }) => {
  return (
    <div>
      <React.Fragment>
        <Navbar />
        <div className="columns mt-6">
          <div className="column is-2">
            <Sidebar />
          </div>
          <div className="column has-background-light">
            <main>{children}</main>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};
