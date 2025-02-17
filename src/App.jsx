import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import Inbox from "./components/Inbox";
import Mail from "./components/Mail";
import Sendmail from "./components/Sendmail";
import Login from "./components/Login";
import { useSelector } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
    ],
  },
]);
function App() {
  const { user } = useSelector((store) => store.appSlice);

  return (
    <div className="className='bg-[#F6F8FC] w-screen h-screen overflow-hidden">
      {!user ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <RouterProvider router={router} />
          <div className="absolute w-[30%] bottom-0 right-20 z-10">
            <Sendmail />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
