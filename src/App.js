import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import WorksPage from "./Pages/WorksPage";
import ContactPage from "./Pages/ContactPage";
import RootLayout from "./Pages/RootLayout";
import { useEffect } from "react";
import { fetchProfileData } from "./store/profile-actions";
import { useDispatch } from "react-redux";
// import "bootstrap/dist/css/bootstrap.min.css";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/resume",
        element: <ResumePage />,
      },
      {
        path: "/work",
        element: <WorksPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, []);

  return (
    <RouterProvider router={routes}>
      <div></div>
    </RouterProvider>
  );
}

export default App;
