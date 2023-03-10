import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import noAvatar from '../../asset/images/no-avatar.jpg';
import Spinner from "../layout/Spinner";
import DepartmentService from './../../services/departmentService';
import TeacherService from './../../services/teacherService';
import { toast } from 'react-toastify';
import FileService from './../../services/fileService';

function CreateTeacher() {
    const [state, setState] = useState({
        loading: false,
        uploading: false,
        departments: [],
        teacher: {
            name: "",
            email: "",
            mobile: "",
            avatar: "",
            departmentId: 0
        }
    })

    const [selectFile, setSelectFile] = useState({});

    useEffect(() => {
        try {
            setState({ ...state, loading: true });
            async function getData() {
                let departmentRes = await DepartmentService.getDepartments();
                setState({
                    ...state,
                    departments: departmentRes.data,
                    loading: false
                })
            }
            getData();
        } catch (error) {

        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let teacherRes = await TeacherService.createTeacher(teacher);
            if (teacherRes.data) {
                toast.success("Teacher created success!");
                setState({
                    ...state,
                    teacher: {
                        name: "",
                        email: "",
                        mobile: "",
                        avatar: "",
                        departmentId: 0
                    }
                })
            }
        } catch (error) {

        }
    }

    const handleInputValue = (e) => {
        setState({
            ...state,
            teacher: {
                ...teacher,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSelectAvatar = (e) => {
        let fakeAvatarUrl = URL.createObjectURL(e.target.files[0])
        setState({
            ...state,
            teacher: {
                ...teacher,
                avatar: fakeAvatarUrl
            }
        })
        setSelectFile(e.target.files[0]);
    }

    const handleUploadAvatar = async () => {
        try {
            setState({...state, uploading: true})
            let uploadRes = await FileService.uploadImage(selectFile);
            if (uploadRes.data.url) {
                setState({
                    ...state,
                    teacher: {
                        ...teacher,
                        avatar: uploadRes.data.url
                    },
                    uploading: false
                })
                toast.info("Avatar has been uploaded!")
            }
        } catch (error) {
            toast.error("Upload failed, please try again later!")
            setState({...state, uploading: false})
        }
    }
    const { loading, uploading, departments, teacher } = state;
    const { name, email, mobile, departmentId, avatar } = teacher;
    console.log(teacher);
    return (
        <>
            <section className="create-teacher-info mt-2">
                <div className="container">
                    <h4 className="fw-bolder text-warning">Create Teacher</h4>
                    <p className="fst-italic">Nisi culpa aliqua pariatur aute dolor velit eiusmod labore velit qui commodo. Nulla nostrud occaecat consequat eu consequat id qui. Dolor duis fugiat aute adipisicing officia veniam voluptate cupidatat deserunt irure. Sint officia qui Lorem in consequat deserunt cillum veniam ipsum sint dolore. Nostrud fugiat elit ipsum elit proident sint cillum incididunt nostrud incididunt adipisicing. Enim elit incididunt dolore incididunt cupidatat anim sit voluptate non ex sit veniam. Officia Lorem cillum excepteur nostrud commodo id magna laborum eu non velit commodo velit.</p>
                </div>
            </section>
            <section className="create-teacher-area my-2">
                <div className="container">
                    {
                        loading ? <Spinner /> : (
                            <div className="row">
                                <div className="col-md-4">
                                    <form onSubmit={handleSubmit}>
                                        <div className="d-flex align-items-center">
                                            <div className="col-auto me-2 w-25">
                                                <label htmlFor="name" className="col-form-label">Fullname</label>
                                            </div>
                                            <div className="col-auto flex-grow-1">
                                                <input type="text" id="name" name="name"
                                                    className="form-control form-control-sm" required
                                                    value={name}
                                                    onInput={handleInputValue}
                                                />
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="col-auto me-2 w-25">
                                                <label htmlFor="email" className="col-form-label">Email</label>
                                            </div>
                                            <div className="col-auto flex-grow-1">
                                                <input type="email" id="email" name="email"
                                                    className="form-control form-control-sm" required
                                                    value={email}
                                                    onInput={handleInputValue}
                                                />
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="col-auto me-2 w-25">
                                                <label htmlFor="mobile" className="col-form-label">Mobile</label>
                                            </div>
                                            <div className="col-auto flex-grow-1">
                                                <input type="tel" id="mobile" name="mobile"
                                                    className="form-control form-control-sm"
                                                    value={mobile}
                                                    onInput={handleInputValue}
                                                />
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="col-auto me-2 w-25">
                                                <label htmlFor="name" className="col-form-label">Department</label>
                                            </div>
                                            <div className="col-auto flex-grow-1">
                                                <select className="form-control form-control-sm" id="department"
                                                    name="departmentId" defaultValue={0}
                                                    value={departmentId}
                                                    onChange={handleInputValue}
                                                >
                                                    <option value={0} disabled>Select a department</option>
                                                    {
                                                        departments.map((depart) => (
                                                            <option key={depart.id} value={depart.id}>{depart.name}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center mt-2">
                                            <div className="col-auto me-2 w-25">
                                            </div>
                                            <div className="col-auto flex-grow-1">
                                                <button type="submit" className="btn btn-warning btn-sm me-2">
                                                    <i className="fa fa-user-plus me-1"></i>
                                                    Create
                                                </button>
                                                <Link to={"/teacher-app/teacher"} className="btn btn-dark btn-sm">
                                                    <i className="fa-solid fa-angles-left me-1 text-white"></i>
                                                    Back
                                                </Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <img role={"button"} src={avatar || noAvatar} className="card-img-top" alt="..."
                                            onClick={() => document.querySelector('#fileAvatar').click()}
                                        />
                                        <div className="card-body d-flex align-items-center justify-content-center">
                                            {
                                                uploading ? (
                                                    <button className="btn btn-secondary btn-sm" type="button" disabled>
                                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                                                        Uploading...
                                                    </button>
                                                ) : (
                                                    <button className="btn btn-secondary btn-sm"
                                                        onClick={handleUploadAvatar}
                                                    >Upload</button>
                                                )
                                            }
                                        </div>
                                        <input id="fileAvatar" type="file" className="d-none" accept="image/*"
                                            onChange={handleSelectAvatar}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-5"></div>
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default CreateTeacher;