import App from './components/App.jsx'
//import CarouselContainer from './components/CarouselContainer.jsx';
import ErrorPage from "./components/ErrorPage";

const appRoutes = [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />
    },
    {
      path: "/cart/:id",
      element: <ErrorPage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/cart/:id/checkout",
      element: <ErrorPage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/wishlist",
      element: <ErrorPage />,
      errorElement: <ErrorPage />
    },
  ];

export default appRoutes;