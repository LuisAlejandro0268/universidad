import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import './App.css'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Mensajeria from "./pages/Mensajeria.jsx";
import Notificacion from "./pages/Notificacion.jsx";
import Lista from "./pages/Lista.jsx";
import Camara from "./pages/Camara.jsx";
import Horario from "./pages/Horario.jsx";
import Direccion from "./pages/Direccion.jsx";
import Extracurriculares from "./pages/Extracurriculares.jsx";
import CalificacionesPorCorte from "./pages/CalificacionesPorCorte.jsx";
import ChooseSubject from "./pages/ChooseSubject.jsx";
import ServiceRequest from "./pages/ServiceRequest.jsx";
import Load from "./pages/Load.jsx";
import Bill from "./pages/Bill.jsx";
import PersonalData from "./pages/PersonalData.jsx";
import Address from "./pages/Address.jsx";
import Academic from "./pages/Academic.jsx";
import Health from "./pages/Health.jsx";
import PaymentsList from "./components/PaymentsList.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Tareas from "./pages/Tareas.jsx";
import Evaluaciones from "./pages/Evaluaciones.jsx";
import Webcam from "./pages/Webcam.jsx";
import Login from "./pages/auth/Login.jsx";
import AccountData from "./pages/AccountData.jsx";
import AcademicPre from "./pages/AcademicPre.jsx";
import Privacidad from "./pages/Privacidad.jsx";
import Apariencia from "./pages/Apariencia.jsx";
import Accesibilidad from "./pages/Accesibilidad.jsx";
import Avanzado from "./pages/Avanzado.jsx";
import Posts from "./pages/Posts.jsx";
import Orders from './pages/Orders.jsx';
import Fee from './pages/Fee.jsx';
import Authors from './pages/Authors.jsx';
import Reviews from './pages/Reviews.jsx';
import Reviewers from './pages/Reviewers.jsx';
import Magazines from './pages/Magazines.jsx';
import Pensums  from './pages/Pensums.jsx';
import Messaging  from './pages/Messaging.jsx';
import Payrolls  from './pages/Payrolls.jsx';
import FinalNotes  from './pages/FinalNotes.jsx';
import Customer  from './pages/Customer.jsx';
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route
          path="/dashboard/calificacionesporcorte"
          element={<CalificacionesPorCorte />}
        ></Route>
        <Route
          path="/dashboard/ChooseSubject"
          element={<ChooseSubject />}
        ></Route>
        <Route
          path="/dashboard/solicitudes-servicio"
          element={<ServiceRequest />}
        />
        <Route
          path="/dashboard/order-payments/:id"
          element={<PaymentsList />}
        />
        <Route path="/dashboard/pagos/:id" element={<Bill />} />
        <Route path="/dashboard/load" element={<Load />}></Route>
        <Route path="/dashboard/address" element={<Address />}></Route>
        <Route path="/dashboard/personal" element={<PersonalData />}></Route>
        <Route path="/dashboard/mensajeria" element={<Mensajeria />}></Route>
        <Route path="/dashboard/academicpre" element={<AcademicPre />}></Route>
        <Route path="/dashboard/apariencia" element={<Apariencia />}></Route>
        <Route
          path="/dashboard/accesibilidad"
          element={<Accesibilidad />}
        ></Route>
        <Route path="/dashboard/avanzado" element={<Avanzado />}></Route>
        <Route path="/dashboard/privacidad" element={<Privacidad />}></Route>
        <Route
          path="/dashboard/configuracion"
          element={<AccountData />}
        ></Route>
        <Route
          path="/dashboard/notificacion"
          element={<Notificacion />}
        ></Route>
        <Route path="/dashboard/lista" element={<Lista />}></Route>
        <Route path="/dashboard/camara" element={<Camara />}></Route>
        <Route path="/dashboard/Inscripcion" element={<Horario />}></Route>
        <Route path="/dashboard/direccion" element={<Direccion />}></Route>
        <Route path="/dashboard/academico" element={<Academic />}></Route>
        <Route path="/dashboard/health" element={<Health />}></Route>
        <Route path="/dashboard/tareas" element={<Tareas />}></Route>
        <Route path="/webcam" element={<Webcam />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/dashboard/evaluaciones"
          element={<Evaluaciones />}
        ></Route>
        <Route
          path="/dashboard/extracurriculares"
          element={<Extracurriculares />}
        ></Route>

        <Route path="/dashboard/publicaciones" element={<Posts />}></Route>
        <Route path="/dashboard/ordenes" element={<Orders />}></Route>
        <Route path="/dashboard/pagos" element={<Fee />}></Route>
        <Route path="/dashboard/autores" element={<Authors />}></Route>
        <Route path="/dashboard/revisiones" element={<Reviews />}></Route>
        <Route path="/dashboard/revisores" element={<Reviewers />}></Route>
        <Route path="/dashboard/revistas" element={<Magazines />}></Route>
        <Route path="/dashboard/pensum" element={<Pensums  />}></Route>
        <Route path="/dashboard/mensaje" element={<Messaging  />}></Route>
        <Route path="/dashboard/nominas" element={<Payrolls  />}></Route>
        <Route path="/dashboard/notasfinales" element={<FinalNotes  />}></Route>
        <Route path="/dashboard/ordenes" element={<Customer  />}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);