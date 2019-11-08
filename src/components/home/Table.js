import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SpaceAdder from "./SpaceAdder";
import SpaceList from "./SpaceList";
import Signout from "../shared/Signout";
import { Typography, Col, PageHeader } from "antd";

const Heading = Typography.Title;

class Table extends Component {
  render() {
    const { spaces } = this.props;
    const routes = [{ path: "/home", breadcrumbName: "Home" }];
    const itemRender = route => (
      <Link to={route.path}>{route.breadcrumbName}</Link>
    );
    return (
      <div>
        <Col span={14}>
          <PageHeader breadcrumb={{ itemRender, routes }}>
            <Heading level={2}>Workspaces</Heading>
          </PageHeader>
        </Col>
        <Col span={10} style={{ textAlign: "right" }}>
          <Signout changeAuthState={this.props.changeAuthState} />
        </Col>
        <SpaceAdder />
        {!spaces || spaces.length === 0 ? (
          <div style={{ textAlign: "center", marginTop: "10%" }}>
            <img
              alt=""
              src={require("../../styles/empty.png")}
              style={{ width: "200px" }}
            />
            <h2
              style={{
                fontWeight: 300,
                marginTop: "15px",
                color: "rgb(70, 70, 70)"
              }}
            >
              You have no Workspaces.
            </h2>
          </div>
        ) : (
          <SpaceList spaces={spaces} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    spaces: state.spaces
  };
};

Table = connect(mapStateToProps)(Table);
export default Table;
