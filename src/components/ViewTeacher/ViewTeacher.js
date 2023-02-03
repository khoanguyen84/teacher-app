import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import TeacherService from './../../services/teacherService';
import noAvatar from '../../asset/images/no-avatar.jpg';
import DepartmentService from './../../services/departmentService';
import Spinner from "../layout/Spinner";

function ViewTeacher() {
    const [state, setState] = useState({
        loading: false,
        teacher: {},
        departments: []
    })
    const { teacherId } = useParams();
    useEffect(() => {
        try {
            setState({ ...state, loading: true });
            async function getData() {
                let teacherRes = await TeacherService.getTeacher(teacherId);
                let departmentRes = await DepartmentService.getDepartments();
                setState({
                    ...state,
                    teacher: teacherRes.data,
                    departments: departmentRes.data,
                    loading: false
                })
            }
            getData();
        } catch (error) {
            console.log(error.message);
        }
    }, [])


    const { loading, teacher, departments } = state;
    const { name, email, mobile, departmentId, avatar, status } = teacher;

    const getDepartmentById = (id) => {
        let department = state.departments.find((depart) => depart.id == id);
        return department ? department.name : "";
    }
    return (
        <>
            <section className="view-info mt-2">
                <div className="container">
                    <div className="d-flex align-items-center">
                        <h4 className="fw-bolder text-primary me-2">{name ? `${name}'s Profile` : ""} </h4>
                        <Link to={"/teacher-app/teacher"} className="btn btn-outline-secondary btn-sm">
                            <i className="fa-solid fa-angles-left me-1 text-muted"></i>
                            Back
                        </Link>
                    </div>
                    <p className="fst-italic">Ea ex sit eu dolore. Consequat consectetur id pariatur ad ut non anim reprehenderit pariatur velit Lorem consectetur. Labore dolor quis anim mollit. Laboris deserunt qui fugiat commodo veniam excepteur esse exercitation eu voluptate in aute occaecat incididunt. Ex Lorem proident sit sint magna sit sunt ex enim aliquip.</p>
                </div>
            </section>
            <section className="view-detail">
                <div className="container">
                    {
                        loading ? <Spinner /> : (
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card">
                                        <img src={avatar || noAvatar} className="card-img-top" alt="..." />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <span className="fw-bolder">Name: </span>
                                            {name}
                                        </li>
                                        <li className="list-group-item">
                                            <span className="fw-bolder">Department: </span>
                                            {getDepartmentById(departmentId)}
                                        </li>
                                        <li className="list-group-item">
                                            <span className="fw-bolder">Email: </span>
                                            {email}
                                        </li>
                                        <li className="list-group-item">
                                            <span className="fw-bolder">Mobule: </span>
                                            {mobile}
                                        </li>
                                        <li className="list-group-item">
                                            <span className="fw-bolder">Status: </span>
                                            {`${status ? "Active" : "Blocked"}`}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default ViewTeacher;