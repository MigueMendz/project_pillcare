import React from 'react';
import { Line } from 'react-chartjs-2';

const HealthTrendChart = () => {
  const data = {
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    datasets: [
      {
        label: 'Nivel de Salud',
        data: [70, 75, 80, 78, 85, 90, 95],
        borderColor: '#00747C',
        fill: false,
      },
    ],
  };

  return <Line data={data} />;
};

export default HealthTrendChart;
