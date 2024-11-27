import App from './components/App.jsx'
import Landing from './components/Landing'
import CarouselContainer from './components/CarouselContainer.jsx';
//import ErrorPage from "./pages/ErrorPage";

const appRoutes = [
    {
      path: "/",
      element: <App />,
      errorElement: <App />
    },
    {
      path: "/cart/:id",
      element: <CarouselContainer />,
      errorElement: <Landing />
    },
    {
      path: "/cart/:id/checkout",
      element: <Landing />,
      errorElement: <Landing />
    },
    {
      path: "/wishlist",
      element: <Landing />,
      errorElement: <Landing />
    },
  ];

export default appRoutes;