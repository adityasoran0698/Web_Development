import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import Reports from "./components/Reports";
import MockTests from "./components/MockTests";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="container">
          <div className="navbar">
            <Navbar />
          </div>
          <Home />
        </div>
      ),
    },
    {
      path: "/about",
      element: (
        <div className="container">
          <div className="navbar">
            <Navbar />
          </div>
          <About />
        </div>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <div className="container">
          <div className="navbar">
            <Navbar />
          </div>
          <Dashboard />
        </div>
      ),
      children: [
        {
          path: "courses",
          element: <Courses />,
        },
        {
          path: "mock-tests",
          element: <MockTests />,
        },
        {
          path: "reports",
          element: (
            <Reports/>
          ),
        },
        {
          path:"dashboard",
          element:<Dashboard/>
        }
      ],
    },
    {
      path:"*",
      element:(
        <h1>404-Not Found</h1>
      )
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
