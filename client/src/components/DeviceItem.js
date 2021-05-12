import React from "react";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from "../assets/star.png";
import { useHistory } from "react-router-dom";

const DeviceItem = ({ device }) => {
  const history = useHistory();
  return (
    <Col
      md={3}
      className={"mt-3"}
      onClick={() => history.push("device/" + device.id)}
    >
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image
          width={150}
          height={150}
          src={"http://localhost:5000/" + device.img}
        />
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
          <div>Samsung...</div>
          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <Image width={18} height={18} src={star} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
