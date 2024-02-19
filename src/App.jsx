import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout";
import './styles.scss';
import CharacterView from "./components/Characters/CharacterView";
import CharacterEdit from "./components/Characters/CharacterEdit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/characters/:id",
        element: <CharacterView />,
      },
      {
        path: "/characters/:id/edit",
        element: <CharacterEdit />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
