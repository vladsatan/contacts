import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AddPhone from "./Components/AddPhone/AddPhone";
  
export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/add_phone",
          element: <AddPhone />,
        },
        
      ],
    },
  ]);