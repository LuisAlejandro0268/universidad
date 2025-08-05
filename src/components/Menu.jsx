import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "../styles/Menu.css";
import escucha from "../assets/escucha.png";
import hablar from "../assets/hablar.png";
import libro from "../assets/libro.png";
import pruebas from "../assets/prueba.png";
import engranaje from "../assets/engranaje.png";
import social from "../assets/social.png";
import salida from "../assets/salida.png";
import campaign from "../assets/Campaign.png";
import Personal from "../assets/Personal.png";
import soy from "../assets/soy.png";
import logo from "../assets/logo.png";
import Trabajo from "../assets/trabajo.png";
import lista from "../assets/lista.png";
import tresPuntos from "../assets/tres-puntos.png";
import UserProfileMenu from './UserProfileMenu';
import CampaignData from './CampaignData';
import useSessionStore from '../store/sessionStore';

const Menu = () => {
  const navigate = useNavigate();
  const clearSession = useSessionStore(state => state.clearSession);
  
  const [showUserProfileMenu, setShowUserProfileMenu] = useState(false);
  const [userMenuPosition, setUserMenuPosition] = useState({ top: 0, left: 0 });
  const personalIconRef = useRef(null);

  const [showCampaignDataMenu, setShowCampaignDataMenu] = useState(false);
  const [campaignDataMenuPosition, setCampaignDataMenuPosition] = useState({ top: 0, left: 0 });
  const campaignIconRef = useRef(null);

  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  useEffect(() => {
    if (isMenuExpanded) {
      document.body.classList.add('menu-expanded');
    } else {
      document.body.classList.remove('menu-expanded');
    }
  }, [isMenuExpanded]);

  const toggleUserProfileMenu = () => {
    if (showCampaignDataMenu) {
      setShowCampaignDataMenu(false);
    }
    setShowUserProfileMenu(prev => !prev);
  };

  const toggleCampaignDataMenu = () => {
    if (showUserProfileMenu) {
      setShowUserProfileMenu(false);
    }
    setShowCampaignDataMenu(prev => !prev);
  };

  const toggleMainMenuExpansion = () => {
    setIsMenuExpanded(prev => !prev);
  };

  useEffect(() => {
    if (showUserProfileMenu && personalIconRef.current) {
      const iconRect = personalIconRef.current.getBoundingClientRect();
      const top = iconRect.bottom + 10;
      const left = iconRect.right - 300;
      setUserMenuPosition({ top, left });
    }
  }, [showUserProfileMenu]);

  useEffect(() => {
    if (showCampaignDataMenu && campaignIconRef.current) {
      const iconRect = campaignIconRef.current.getBoundingClientRect();
      const top = iconRect.bottom + 10;
      const left = iconRect.right - 320;
      setCampaignDataMenuPosition({ top, left });
    }
  }, [showCampaignDataMenu]);

  const sampleNotifications = [
    { id: 1, icon: '🔔', title: 'Nueva Tarea Asignada', message: 'Revisa tu tarea de matemáticas.', time: 'Hace 5 min', read: false },
    { id: 2, icon: '✨', title: '¡Promoción Especial!', message: 'Obtén un 20% de descuento en el curso de React.', time: 'Hace 1 hora', read: false },
    { id: 3, icon: '🗓️', title: 'Recordatorio de Evento', message: 'Webinar sobre desarrollo web mañana.', time: 'Hace 3 horas', read: true },
    { id: 4, icon: '💬', title: 'Nuevo Mensaje', message: 'Tienes un mensaje de tu profesor de historia.', time: 'Ayer', read: false },
  ];

  const handleLogout = async (e) => {
    e.preventDefault();
    try {

      navigate('/');
 
      clearSession();
      

      sessionStorage.removeItem('session-storage');
      localStorage.removeItem('user');
      
      
      setTimeout(() => {
        window.location.href = '/';
      }, 100);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      window.location.href = '/';
    }
  };

  return (
    <div>
      <div className="top-icons-container">
        <img
          width={50}
          src={tresPuntos}
          alt="tres-puntos"
          className="top-icon menu-toggle-icon"
          onClick={toggleMainMenuExpansion}
          style={{ cursor: 'pointer' }}
        />
        <img
          width={50}
          src={campaign}
          alt="campaign"
          className="top-icon campaign-icon"
          onClick={toggleCampaignDataMenu}
          style={{ cursor: 'pointer' }}
          ref={campaignIconRef}
        />
        {showCampaignDataMenu && (
          <CampaignData
            style={{
              position: 'fixed',
              top: campaignDataMenuPosition.top,
              left: campaignDataMenuPosition.left,
              zIndex: 1001
            }}
            notifications={sampleNotifications}
          />
        )}
        <img
          width={50}
          src={Personal}
          alt="Personal"
          className="top-icon Personal-icon"
          onClick={toggleUserProfileMenu}
          style={{ cursor: 'pointer' }}
          ref={personalIconRef}
        />
        {showUserProfileMenu && (
          <UserProfileMenu
            style={{
              position: 'fixed',
              top: userMenuPosition.top,
              left: userMenuPosition.left,
              zIndex: 1001
            }}
          />
        )}
      </div>
      <nav className={`navbar ${isMenuExpanded ? 'expanded' : 'collapsed'}`}>
        <ul className="icons">
          <li>
            <a href="/"> 
              <img src={logo} alt="Logo" />
            </a>
          </li>
          <li><Link to="/dashboard"><img src={escucha} alt="escucha" /></Link></li>
          <li><Link to="/dashboard/personal"><img src={soy} alt="soy" /></Link></li>
          <li><Link to="/dashboard/Inscripcion"><img src={Trabajo} alt="Trabajo" /></Link></li>
          <li><Link to="/dashboard/mensajeria"><img src={hablar} alt="hablar" /></Link></li>
          <li><Link to="/dashboard/tareas"><img src={pruebas} alt="pruebas" /></Link></li>
          <li><Link to="/dashboard/evaluaciones"><img src={lista} alt="lista" /></Link></li>
          <li><Link to="/dashboard/calificacionesporcorte"><img src={libro} alt="Calificaciones" /></Link></li>
          <li><Link to="/dashboard/solicitudes-servicio"><img src={social} alt="Pagos" /></Link></li>
          <li><Link to="/dashboard/configuracion"><img src={engranaje} alt="Settings" /></Link></li>
          <li><a href="#" onClick={handleLogout}><img src={salida} alt="Salir" /></a></li>
        </ul>
        <ul className="menu">
          <li className="menu-item"><Link to="/dashboard">Dashboard</Link></li>
          <li className="menu-item"><Link to="/dashboard/personal">Personal</Link></li>
          <li className="menu-item"><Link to="/dashboard/Inscripcion">Inscripcion</Link></li>
          <li className="menu-item"><Link to="/dashboard/mensajeria">Mensajeria</Link></li>
          <li className="menu-item"><Link to="/dashboard/tareas">Tareas</Link></li>
          <li className="menu-item"><Link to="/dashboard/evaluaciones">Evaluaciones</Link></li>
          <li className="menu-item"><Link to="/dashboard/calificacionesporcorte">Calificaciones por Corte</Link></li>
          <li className="menu-item">
            <Link to="/dashboard/solicitudes-servicio">Pagos</Link>
          </li>
          <li className="menu-item">
            <Link to="/dashboard/configuracion">Configuracion</Link>
          </li>
          <li className="menu-item">
            <a href="#" onClick={handleLogout}>Salir</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
