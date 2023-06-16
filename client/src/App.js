import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Login from "./pages/Login";
import AddBlood from "./pages/AddBlood";
import AddDonor from "./pages/AddDonor";
import Request from "./pages/Request";
import Register from "./pages/Register";
import Home from "./pages/Home";
import './style.scss';

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/addblood", element: <AddBlood /> },
  { path: "/adddonor", element: <AddDonor /> },
  { path: "/request", element: <Request /> },
  { path: "/register", element: <Register /> },
]);



function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
