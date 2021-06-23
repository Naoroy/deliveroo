import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { Button, Alert, Col, Input,
  InputGroup, InputGroupAddon, Row } from "reactstrap";
import RestaurantList from "../components/RestaurantList"

function Home() {
  return (
    <div>
      <div>
        <Alert color="primary">
          Hello Project is strapi-next with Bootstrap
        </Alert>
        &nbsp; <Button color="primary">Hello from nextjs</Button>
      </div>
    </div>
  );
};

export default Home;
