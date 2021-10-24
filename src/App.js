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
      <Header as="h2">React Google Sheets!</Header>
      <Form className="form" onSubmit={submitHandler}>
        <Form.Field>
          <label>Name</label>
          <input
            placeholder="Inserisci nome"
            type="text"
            name="firstname"
            defaultValue={state.name}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>Cognome</label>
          <input
            placeholder="Inserisci cognome"
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
