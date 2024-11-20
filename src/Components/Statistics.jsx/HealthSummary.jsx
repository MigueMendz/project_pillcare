import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function HealthSummary({ data }) {
  const printRef = useRef();

  const generatePDF = async () => {
    const input = printRef.current;
    try {
      const canvas = await html2canvas(input, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("statistics-report.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div ref={printRef} className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-medium text-teal-600 mb-4">
        Estado de Salud
      </h3>
      <p className="text-gray-700 mb-2">
        Estado general:{" "}
        <span className="font-semibold text-green-600">Bueno</span>
      </p>
      <p className="text-gray-700 mb-2">
        Dosis tomadas esta semana: <span className="font-semibold">85%</span>
      </p>
      <p className="text-gray-700 mb-2">
        Alertas recientes: <span className="font-semibold">2</span>
      </p>
      <p className="text-gray-700">
        Notas:{" "}
        <span className="italic">
          Monitorizar el cumplimiento en las mañanas.
        </span>
      </p>
      <button
        onClick={generatePDF}
        className="mt-4 bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-300"
      >
        Descargar PDF
      </button>
    </div>
  );
}

export default HealthSummary;
