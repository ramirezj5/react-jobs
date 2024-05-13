import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./assets/pages/HomePage";
import MainLayout from "./assets/layouts/MainLayout";
import JobsPage from "./assets/pages/JobsPage";
import NotFoundPage from "./assets/pages/NotFoundPage";
import AddJobPage from "./assets/pages/AddJobPage";
import EditJobPage from "./assets/pages/EditJobPage";
import JobPage, { jobLoader } from "./assets/pages/JobPage";

const App = () => {
  // Add New Job
  const addJob = async (newJob: any) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  const deleteJob = async (id: string) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  const updatedJob = async (job: any) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updatedJobSubmit={updatedJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  // To Do: Add javascript logic
  // Every component will return jsx - only returns a single element. <> </> can wrap multiple elements
  return <RouterProvider router={router} />;
};

export default App;
