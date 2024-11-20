import React, { useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "../../assets/LOGO.png";
import LogoutModal from "./LogoutModal";

function Slidebar() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const handleLogout = () => {
    closeModal();
    window.location.href = "/"; // Redirecciona al inicio al cerrar sesión
  };

  return (
    <div className="w-64 bg-white h-screen p-6 shadow-lg">
      <img src={LOGO} />

      <ul className="space-y-4 list-none">
        <li>
          <Link
            to="/home"
            className="text-black font-medium no-underline hover:text-teal-700 transition duration-200"
          >
            Resumen
          </Link>
        </li>
        <li>
          <Link
            to="/stats"
            className="text-black font-medium hover:text-teal-600 no-underline transition duration-200"
          >
            Estadísticas
          </Link>
        </li>
        <li>
          <Link
            to="/monitoring"
            className="text-black font-medium hover:text-teal-600 no-underline transition duration-200"
          >
            Monitorear
          </Link>
        </li>
        <li>
          <Link
            to="/medicines"
            className="text-black font-medium hover:text-teal-600 no-underline transition duration-200"
          >
            Medicación
          </Link>
        </li>

      </ul>
      <div className="mt-10 border-t pt-4">
        <p className="text-gray-600">General</p>
        <ul className="space-y-4 list-none">
          <li>
            <Link
              to="/settings"
              className="text-gray-600 hover:text-teal-600 no-underline transition duration-200"
            >
              Configuración
            </Link>
          </li>
          <li>
            <Link
              to="/help"
              className="text-gray-600 hover:text-teal-600 no-underline transition duration-200"
            >
              Ayuda
            </Link>
          </li>
          <li>
            <button
              onClick={openModal}
              className="text-gray-600 hover:text-blue-500 no-underline bg-transparent border-none cursor-pointer"
            >
              Cerrar Sesión
            </button>
          </li>
        </ul>
      </div>

      {/* Modal de Logout */}
      <LogoutModal
        isOpen={showModal}
        onClose={closeModal}
        onLogout={handleLogout}
      />
    </div>
  );
}

export default Slidebar;