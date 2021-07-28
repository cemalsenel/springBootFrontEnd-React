import axiosInstance from "./AxiosInstance";

const addPeople = (person) => {
    return axiosInstance.post("/add", person)
};
const getAllPeople = (person) => {
    return axiosInstance.get("/")
}

const deletePeopleById = (id) =>{
    return axiosInstance.delete(`/delete/${id}`);
}

const updatePeopleById = (id) =>{
    return axiosInstance.get(`/search/${id}`);
}

const updatePeopleByIdPatch = (id, person) => {
    return axiosInstance.patch(`/updatePatch/${id}`, person);
}
const PeopleService = {
    addPeople,
    getAllPeople,
    deletePeopleById,
    updatePeopleById,
    updatePeopleByIdPatch
}

export default PeopleService;