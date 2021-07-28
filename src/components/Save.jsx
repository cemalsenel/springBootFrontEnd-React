import React, { useState }  from "react";
import { Button, Container, Form } from "react-bootstrap";
import PeopleService from "../service/PeopleService"

const Save = () => {

    const [person, setPerson] = useState({name:"", surname:"", age:""});
    const {name, surname, age} = person;

    const update = (event) =>{
        const {name, value} = event.target;
        setPerson(() =>{
            return {
                ...person,
                [name]:value,
            }
        })
    }

    const handleSubmit = () => {
        PeopleService.addPeople(person).then((res) => console.log(res));
    }
  return (
    <Container>
      <Form className="m-4">
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" value={name} name="name" onChange={update}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="surname">
          <Form.Label>Surname</Form.Label>
          <Form.Control type="text" placeholder="Enter your surname"  value={surname} name="surname" onChange={update}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" placeholder="Enter your age"  value={age} name="age" onChange={update}/>
        </Form.Group>

        <div className="mt-3 text-center">
          <Button variant="primary" type="submit" onClick={handleSubmit} >
            Save
          </Button>

          <Button variant="danger" type="reset" className="ms-2">
            Reset
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Save;
