import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import TeacherList from './components/TeacherList/TeacherList';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<TeacherList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
