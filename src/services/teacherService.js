import axios from "axios";
import { Teacher_API_URL } from "../ultility/common";

class TeacherService{
    static getTeachers(){
        return axios.get(Teacher_API_URL);
    }

    static createTeacher(teacher){
        return axios.post(Teacher_API_URL, teacher);
    }
}

export default TeacherService;