import App from './components/App.jsx'
//import CarouselContainer from './components/CarouselContainer.jsx';
import RequestFormContainer from "./components/RequestFormContainer";
import CartContainer from './components/CartContainer';
import ErrorPage from "./components/ErrorPage";

const appRoutes = [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />
    },
    {
      path: "/wishlist",
      element: <RequestFormContainer />,
      errorElement: <ErrorPage />
    },
    {
      path: "/cart",
      element: <CartContainer />,
      errorElement: <ErrorPage />
    },
    /*
    {
      path: "/cart/:id",
      element: <ErrorPage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/cart/:id/checkout",
      element: <ErrorPage />,
      errorElement: <ErrorPage />
    }
    */
  ];

export default appRoutes;