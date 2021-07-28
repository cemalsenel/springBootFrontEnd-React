import React, { useEffect, useState }  from "react";
import { Button, Container, Form } from "react-bootstrap";
import PeopleService from "../service/PeopleService"
import { useParams, useHistory } from "react-router";

const Update = () => {
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

    //useParam hook'u ile Route içreisindeki id parametresini getirir
    const {id} = useParams();

    //Sayfa ilk render edildiğinde id ile veritabanından güncellenecek kişinin verilerini getirir
    useEffect(() => {
        PeopleService.updatePeopleById(id).then((response) => {
            setPerson(response.data);
        })
    }, [id]);

    const handleUpdate = () => {
      PeopleService.updatePeopleByIdPatch(id, person).then();
    }

    const history = useHistory();
    const handleCancel = () => {
        history.push("/");
    }
    return (
        <div>
            <Container>
            <h1 className="text-center mt-3">Update Page</h1>
      <Form className="m-4">
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" value={name} name="name" onChange={update} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="surname">
          <Form.Label>Surname</Form.Label>
          <Form.Control type="text" placeholder="Enter your surname"  value={surname} name="surname" onChange={update} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" placeholder="Enter your age"  value={age} name="age" onChange={update} />
        </Form.Group>

        <div className="mt-3 text-center">
          <Button variant="primary" type="submit" onClick={handleUpdate} >
            Update
          </Button>

          <Button variant="danger" type="reset" className="ms-2" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
        </div>
    )
}

export default Update
