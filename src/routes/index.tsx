import Home from "../pages/home";
import Post from "../pages/posts";

const pulicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/post",
    element: <Post />,
  },
];

const privateRoutes = [{}];

export { pulicRoutes, privateRoutes };
