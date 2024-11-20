import React, { useState } from "react";
import MedicinesTable from "../Components/Medication/MedicinesTable";
import MedicineForm from "../Components/Medication/MedicineForm";
import StatusMessage from "../Components/Medication/StatusMessage";

function ManageMedicines() {
  const [medicines, setMedicines] = useState([]);
  const [form, setForm] = useState({
    id: null,
    name: "",
    dosage: "",
    frequency: "",
    startDate: "",
    endDate: "",
    rfidCode: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSaveMedicine = () => {
    if (isEditing) {
      // Editar medicamento
      const updatedMedicines = medicines.map((medicine) =>
        medicine.id === form.id ? { ...form } : medicine
      );
      setMedicines(updatedMedicines);
      setStatusMessage("¡Medicamento actualizado exitosamente!");
    } else {
      // Agregar medicamento nuevo
      const newMedicine = {
        ...form,
        id: Date.now(), // Generar un ID único
      };
      setMedicines([...medicines, newMedicine]);
      setStatusMessage("¡Medicamento agregado exitosamente!");
    }
    resetForm();
  };

  const handleDeleteMedicine = (id) => {
    const filteredMedicines = medicines.filter((medicine) => medicine.id !== id);
    setMedicines(filteredMedicines);
    setStatusMessage("¡Medicamento eliminado exitosamente!");
  };

  const handleEditMedicine = (medicine) => {
    setForm(medicine);
    setIsEditing(true);
  };

  const handleScanRfid = () => {
    const simulatedRfid = "12345RFID";
    setForm({ ...form, rfidCode: simulatedRfid });
    setStatusMessage("Código RFID escaneado correctamente.");
  };

  const resetForm = () => {
    setForm({
      id: null,
      name: "",
      dosage: "",
      frequency: "",
      startDate: "",
      endDate: "",
      rfidCode: "",
    });
    setIsEditing(false);
    setStatusMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h2 className="text-2xl font-semibold text-teal-600 mb-6">
        Gestión de Medicamentos
      </h2>
      <MedicineForm
        form={form}
        isEditing={isEditing}
        onChange={handleInputChange}
        onSave={handleSaveMedicine}
        onScanRfid={handleScanRfid}
      />
      <MedicinesTable
        medicines={medicines}
        onEdit={handleEditMedicine}
        onDelete={handleDeleteMedicine}
      />
      <StatusMessage message={statusMessage} />
    </div>
  );
}

export default ManageMedicines;
