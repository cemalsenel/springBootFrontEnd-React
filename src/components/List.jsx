import React, { useState, useEffect,} from "react";
import { Container, Table } from "react-bootstrap";
import PeopleService from "../service/PeopleService";
import { useHistory } from "react-router-dom"

const List = () => {
  const [people, setPeople] = useState([]);

  //? List componenti her render edildiğinde ve people hook'u her değiştiğinde useEffect hook'u çalışır.
  useEffect(() => {
    PeopleService.getAllPeople().then((response) => {
      setPeople(response.data);
    });
  }, [people]);

  const handleDelete = (id) => {
    PeopleService.deletePeopleById(id).then();
    // PeopleService.deletePeopleById(id).then((response) => {
    //   if (response.status === 200) {
    //     setPeople(people.filter((person) => person.id !== id));
    //   }
    // });
  };

  const history = useHistory();

  const handleUpdate = (id) => {
      history.push(`/update/${id}`);
  }
  return (
    <Container className="mt-4">
      {people.length === 0 ? (
        <h1 className="text-center">There is no data in database</h1>
      ) : (
        <div>
          <h1 className="text-center">People List</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th style={{ width: "250px" }}>Operations</th>
              </tr>
            </thead>
            <tbody>
              {people.map((person) => {
                const { name, surname, age, id } = person;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{surname}</td>
                    <td>{age}</td>
                    <td>
                      <button
                        className="btn btn-warning"
                        style={{ width: "100px" }}
                        onClick={() => handleUpdate(id)}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-danger"
                        style={{ marginLeft: "10px", width: "100px" }}
                        onClick={() => handleDelete(id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      )}
    </Container>
  );
};

export default List;
