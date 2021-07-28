import axiosInstance from "./AxiosInstance";

const addPeople = (person) => {
    return axiosInstance.post("/add", person)
};

const PeopleService = {
    addPeople,
}

export default PeopleService;