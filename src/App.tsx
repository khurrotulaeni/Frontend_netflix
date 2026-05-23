import { Route, Routes } from "react-router-dom";

import LoginForm from "./pages/LoginForm";
import Homepage from "./pages/Homepage_backup";
import Arena from "./pages/Arena";
import Academy from "./pages/Academy";
import Spotlight from "./pages/Spotlight";
import Studio from "./pages/Studio";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import RegisterForm from "./components/organisms/RegisterForm";
import DashboardIndex from "./pages/dashboard/DashboardIndex";
import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";

import CategoryCreate from "./pages/dashboard/category/CategoryCreate";
import FilmIndex from "./pages/dashboard/filmnetflix/FilmIndex";
import FilmCreate from "./pages/dashboard/filmnetflix/FilmCreate";
import FilmEdit from "./pages/dashboard/filmnetflix/FillmEdit";
import CategoryIndex from "./pages/dashboard/category/CategoryIndex";
import CategoryEdit from "./pages/dashboard/category/CategoryEdit";
import EventIndex from "./pages/dashboard/event/EventIndex";
import EventCreate from "./pages/dashboard/event/EventCreate";
import EventEdit from "./pages/dashboard/event/EventEdit";
import PembicaraIndex from "./pages/dashboard/pembicara/PembicaraIndex";
import PembicaraCreate from "./pages/dashboard/pembicara/pembicaraCreate";
import PembicaraEdit from "./pages/dashboard/pembicara/PembicaraEdit";
import Biodata from "./pages/dashboard/biodata/Biodata";

function App() {
  return (
    <Routes>

      <Route element={<MainLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/arena" element={<Arena />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/spotlight" element={<Spotlight />} />
        <Route path="/studio" element={<Studio />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route
          path="/login"
          element={<LoginForm />}
        />

        <Route
          path="/register"
          element={<RegisterForm />}
        />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>

          <Route
            path="/dashboard"
            element={<DashboardIndex />}
          />

          <Route
            path="/dashboard/category"
            element={<CategoryIndex />}
          />

          <Route
            path="/dashboard/category/create"
            element={<CategoryCreate />}
          />

          <Route
            path="/dashboard/category/edit/:id"
            element={<CategoryEdit />}
          />
          
          <Route
            path="/dashboard/filmnetflix"
            element={<FilmIndex />}
          />

           <Route
            path="/dashboard/filmnetflix/create"
            element={<FilmCreate />}
          />

          <Route
          path="/dashboard/filmnetflix/edit/:id"
          element={<FilmEdit />}
        />
          <Route
            path="/dashboard/event"
            element={<EventIndex />}
          />
          <Route
            path="/dashboard/event/edit/:id"
            element={<EventEdit />}
          />
          <Route
            path="/dashboard/event/create"
            element={<EventCreate />}
          />

          <Route
            path="/dashboard/pembicara"
            element={<PembicaraIndex />}
          />
          <Route
            path="/dashboard/pembicara/create"
            element={<PembicaraCreate />}
          />
          <Route
            path="/dashboard/pembicara/edit/:id"
            element={<PembicaraEdit />}
          />
          <Route
            path="/dashboard/biodata"
            element={<Biodata />}
          />
        </Route>
      </Route>

    </Routes>
  );
}

export default App;