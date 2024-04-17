import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const gradientStyle = {
    backgroundImage:
      "linear-gradient(to right bottom, #0f0630, #0f0e36, #11133c, #141742, #161c48, #161e50, #152059, #132261, #0d216e, #061f7b, #031d87, #061893)", // width:"800vh" // Ajoutez la hauteur ici
    height: "400vh",
  };
  return (
    <div style={{ ...gradientStyle, display: 'flex', height: '100vh', overflow: 'scroll initial',position:"fixed" }}>
      <CDBSidebar textColor="#fff" backgroundColor="transparent">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content" >
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="wheelchair" >Tables</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="train" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Train </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;