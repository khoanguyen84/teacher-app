import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import TeacherList from './components/TeacherList/TeacherList';
import CreateTeacher from './components/CreateTeacher/CreateTeacher';
import ViewTeacher from './components/ViewTeacher/ViewTeacher';

function App() {
  return (
    <>
      <ToastContainer autoClose={2000} />
      <Header />
      <Routes>
        <Route path='/teacher-app' element={<TeacherList />} />
        <Route path='/teacher-app/teacher' element={<TeacherList />} />
        <Route path='/teacher-app/teacher/create' element={<CreateTeacher />} />
        <Route path='/teacher-app/teacher/view/:teacherId' element={<ViewTeacher />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
