import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { UserScreen } from "./screens/UserScreen";
import { UsersScreen } from "./screens/UsersScreen";

function App() {
  return (
    <Routes>
      <Route path="users" element={<UsersScreen />} />
      <Route path="users/:id" element={<UserScreen />} />
      <Route path="*" element={<Navigate to={"/users"} />} />
    </Routes>
  );
}

export default App;
