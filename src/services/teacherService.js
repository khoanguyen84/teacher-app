import axios from "axios";
import { Teacher_API_URL } from "../ultility/common";

class TeacherService{
    static getTeachers(){
        return axios.get(Teacher_API_URL);
    }
}

export default TeacherService;