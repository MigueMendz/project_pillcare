import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Modal, Box } from '@mui/material';

function Header() {
  const login_nombre = localStorage.getItem("login_nombre");

  const [open, setOpen] = useState(false);
  const [notifications] = useState([
    { id: 1, text: 'Medicación cumplida: Paracetamol - 8 AM', type: 'info' },
    { id: 2, text: 'Alerta: Dosis de las 10 AM no tomada', type: 'warning' },
    { id: 3, text: 'Medicación cumplida: Ibuprofeno - 12 PM', type: 'info' },
    { id: 4, text: 'Alerta: Revisar niveles de glucosa', type: 'warning' },
    { id: 5, text: 'Medicación cumplida: Vitamina C - 6 PM', type: 'info' },
  ]);

  const handleOpen = () => {
    setOpen(true);
    readNotifications();
  };

  const handleClose = () => setOpen(false);

  const readNotifications = () => {
    if ('speechSynthesis' in window) {
      const synth = window.speechSynthesis;
      notifications.forEach((notification) => {
        const utterance = new SpeechSynthesisUtterance(notification.text);
        utterance.lang = 'es-ES'; // Configuración para español
        utterance.rate = 1; // Velocidad de lectura (1 es normal)
        synth.speak(utterance);
      });
    } else {
      console.error('SpeechSynthesis no es compatible con este navegador.');
    }
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100">
      <h1 className="text-2xl font-semibold text-gray-700">Home</h1>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search here"
          className="p-2 border rounded-md focus:outline-none"
        />
        <div className="relative">
          <NotificationsIcon
            onClick={handleOpen}
            className="text-gray-700 cursor-pointer"
            fontSize="large"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Link to="/user" className="text-gray-700 no-underline">
            {login_nombre}
          </Link>
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>

      {/* Modal for Notifications */}
      <Modal open={open} onClose={handleClose}>
        <Box className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto mt-20">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Notificaciones
          </h2>
          <ul className="space-y-2">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className={`p-2 rounded-md ${
                  notification.type === 'warning'
                    ? 'bg-red-100 text-red-700'
                    : 'bg-green-100 text-green-700'
                }`}
              >
                {notification.text}
              </li>
            ))}
          </ul>
          <button
            onClick={handleClose}
            className="mt-4 w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition duration-300"
          >
            Cerrar
          </button>
        </Box>
      </Modal>
    </div>
  );
}

export default Header;
