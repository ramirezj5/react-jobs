import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./assets/pages/HomePage";
import MainLayout from "./assets/layouts/MainLayout";
import JobsPage from "./assets/pages/JobsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
    </Route>
  )
);

const App = () => {
  // To Do: Add javascript logic
  // Every component will return jsx - only returns a single element. <> </> can wrap multiple elements
  return <RouterProvider router={router} />;
};

export default App;
