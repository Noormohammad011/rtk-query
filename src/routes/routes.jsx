import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home";
import Video from "../components/pages/Video";
import Add from "../components/pages/Add";
import Edit from "../components/pages/Edit";
import Main from "../components/Layout/Main";



const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/videos/:videoId',
        element: <Video />,
      },
      {
        path: '/videos/add',
        element: <Add />,
        },
        {
            path: '/videos/edit/:videoId/',
            element: <Edit />,
        },
    ],
  },
])

export default routes;