import { BrowserRouter, Route, Routes } from "react-router-dom";
import AssignStudent from "./assign_student";
import Home from "./homepage";
import Mentor from "./mentor";
import MentorList from "./mentorsList";
import MentorProfile from "./mentor_Profile";
import Student from "./student";
import StudentList from "./studentList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create-mentor" element={<Mentor />} />
        <Route path="/create-student" element={<Student />} />
        <Route path="/MentorList" element={<MentorList />} />
        <Route path="/assign_student/:id" element={<AssignStudent/>} />
        <Route path="/MentorProfile/:id" element={<MentorProfile/>} />
        <Route path="/studentList" element={<StudentList/>} />
        <Route exact path="/" element={<Home/>} />


      </Routes>
    </BrowserRouter>
  )

}

export default App;
