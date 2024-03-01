import {Routes, Route } from "react-router-dom";
import {Login, Profile, TaskApp, TaskDetail} from "../pages/index";

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<TaskApp />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="taskdetail" element={<TaskDetail />} />
        </Routes>
    </>
  )
};
