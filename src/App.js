import React, { useState } from "react";
import { Button, Form, Container, Header } from "semantic-ui-react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
const axios = require("axios");
const URL =
  "https://sheet.best/api/sheets/442b63fc-1b8d-462c-9fcb-ea80c27487b9";

function App() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [state, setState] = useState({
    name: "",
    age: "",
    salary: "",
    hobby: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(state);
    axios.post(URL, state).then((response) => {
      setIsSuccess(true);
      console.log(response);
    });
  };
  return (
    <Container fluid className="container">
      <Header style={{ marginBottom: 0 }} as="h2">
        React Google Sheets!
      </Header>
      <Header style={{ marginTop: 0 }} as="h4">
        Google sheet{" "}
        <a
          target="_blank"
          href="https://docs.google.com/spreadsheets/d/1ov5xc_ruDKvOf9I7Qgj1UvtVoWr-SOH6fstVUfpaKAc/edit#gid=0"
        >
          view
        </a>
      </Header>
      <Form className="form" onSubmit={submitHandler}>
        <Form.Field>
          <label>Name</label>
          <input
            placeholder="Enter name"
            type="text"
            name="firstname"
            defaultValue={state.name}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>Lastname</label>
          <input
            placeholder="Enter lastname"
            type="text"
            name="lastname"
            defaultValue={state.age}
            onChange={changeHandler}
          />
        </Form.Field>
        <div className="column">
          {isSuccess && "Dati inseriti"}
          <Button color="blue" type="submit">
            Invia
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default App;
