import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { UserPage } from "./pages/UserPage";
import { UsersPage } from "./pages/UsersPage";

function App() {
  return (
    <Routes>
      <Route path="users" element={<UsersPage />} />
      <Route path="users/:id" element={<UserPage />} />
      <Route path="*" element={<Navigate to={"/users"} />} />
    </Routes>
  );
}

export default App;
