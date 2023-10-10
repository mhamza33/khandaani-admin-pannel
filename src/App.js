import logo from "./logo.svg";
import "./App.css";
import UserLayout from "./layout/index";
import LoginLayout from "./layout/Login";
import Users from "./pages/dashboard/users";
import UserVerifications from "./pages/dashboard/usersVerifications";
import UserMemberships from "./pages/dashboard/memberships";
import UpdateRequests from "./pages/dashboard/updateRequests";
import BlockedUsers from "./pages/dashboard/blocked";
import AddAdmin from "./pages/dashboard/addAdmin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginLayout />}>
          <Route path="" element={<Login />} />
        </Route>
        <Route path="/user" exact element={<UserLayout />}>
          <Route index element={<Users />} />
          <Route path="/user/user-verifications" element={<UserVerifications />} />
          <Route path="user-memberships" element={<UserMemberships />} />
          <Route path="update-requests" element={<UpdateRequests />} />
          <Route path="user-blocked" element={<BlockedUsers />} />
          <Route path="add-admin" element={<AddAdmin />} />
        </Route>
        <Route path="*" element={<><h1>Error Page</h1></> } />
      </Routes>
    </>
  );
}

export default App;
