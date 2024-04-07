import { Routes, Route } from "react-router-dom";
import Todo from "./Todo";
import { PrivateRoute } from "./PrivateRoute";
import Login from "./Login";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Todo />
          </PrivateRoute>
        }
      />
     
    </Routes>
  );
};

export default AllRoutes;
