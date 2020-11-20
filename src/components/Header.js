import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "./haeder.css";

export default function Header() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand>Coctail Map</Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink
            className="navbar"
            to="/search"
            activeStyle={{
              fontWeight: "bold",
              color: "darkgreen",
            }}
          >
            Search
          </NavLink>
          <NavLink
            className="navbar"
            to="/home"
            activeStyle={{
              fontWeight: "bold",
              color: "darkgreen",
            }}
          >
            Home
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  );
}
