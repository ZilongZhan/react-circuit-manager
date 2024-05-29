import React, { useState } from "react";
import { Button } from "../../shared/Buttons/Button";

import "./Form.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Form = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedZone, setSelectedZone] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("");
  const [details, setDetails] = useState("");
  const [periodificar, setPeriodificar] = useState(false);
  const [periodo, setPeriodo] = useState("días");
  const [cantidad, setCantidad] = useState(1);
  const [selectedImages, setSelectedImages] = useState([]);

  const handlePriorityChange = (priority) => {
    setSelectedPriority(priority);
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const handleZoneChange = (event) => {
    setSelectedZone(event.target.value);
  };

  const handleDetailsChange = (event) => {
    setDetails(event.target.value);
  };

  const togglePeriodificar = () => {
    setPeriodificar(!periodificar);
  };

  const handlePeriodChange = (event) => {
    setPeriodo(event.target.value);
  };

  const handleCantidadChange = (action) => {
    if (action === "increase") {
      setCantidad(cantidad + 1);
    } else {
      if (cantidad > 1) {
        setCantidad(cantidad - 1);
      }
    }
  };

  const handleImageChange = (event) => {
    const files = event.target.files;
    const fileNames = Array.from(files).map((file) => file.name);
    setSelectedImages(fileNames);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // LOGICA PER ENVIAR LES DADES DEL FORMULARI
    console.log("FORMULARI ENVIAT:", {
      selectedDepartment,
      selectedZone,
      selectedPriority,
      details,
      periodificar,
      periodo,
      cantidad,
      selectedImages,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="title row">
          <div className="col-12">
            <button>
              <img src="../../public/assets/icons/back.png" alt="" />
            </button>
            <h1>ISSUE </h1>
            <h1> #ID</h1>
            <h1>| dd-mm-aa</h1>
          </div>
        </div>
        <div className="row">
          <input className="col-12 " type="text" placeholder="titol issue" />
        </div>
        <div className="row">
          <div className="col-5">
            <label htmlFor="department">Departaments:</label>
            <select
              id="department"
              value={selectedDepartment}
              onChange={handleDepartmentChange}
            >
              <option value="">Selecciona un Departament</option>
              <option value="1">Department 1</option>
              <option value="2">Department 2</option>
              <option value="3">Department 3</option>
            </select>
          </div>
          <div className="col-5 ">
            <label htmlFor="zone">Zones:</label>
            <select id="zone" value={selectedZone} onChange={handleZoneChange}>
              <option value="">Selecciona una Zona</option>
              <option value="1">Zone 1</option>
              <option value="2">Zone 2</option>
              <option value="3">Zone 3</option>
            </select>
          </div>
          <div className="col-2 ">
            <label>Priority:</label>
            <div className="priorityButton">
              <button
                className={selectedPriority === "1" ? "selected" : ""}
                onClick={() => handlePriorityChange("1")}
              ></button>
              <button
                className={selectedPriority === "2" ? "selected" : ""}
                onClick={() => handlePriorityChange("2")}
              ></button>
              <button
                className={selectedPriority === "3" ? "selected" : ""}
                onClick={() => handlePriorityChange("3")}
              ></button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <label htmlFor="details">Detalls:</label>
            <textarea
              id="details"
              value={details}
              onChange={handleDetailsChange}
            />
          </div>
          <div className="col-5 ">
            <label htmlFor="images">Seleccionar imatges:</label>
            <input
              type="file"
              id="images"
              multiple
              onChange={handleImageChange}
              accept="image/*"
            />
            <ul>
              {selectedImages.map((imageName, index) => (
                <li key={index}>{imageName}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row">
          <div col-12>
            <label htmlFor="periodificar">Periodificar:</label>
            <input
              type="checkbox"
              id="periodificar"
              checked={periodificar}
              onChange={togglePeriodificar}
            />
            {periodificar && (
              <div>
                <label htmlFor="periodo">Periode:</label>
                <select
                  id="periodo"
                  value={periodo}
                  onChange={handlePeriodChange}
                >
                  <option value="días">Dies</option>
                  <option value="meses">Mesos</option>
                  <option value="años">Anys</option>
                </select>
                <span>
                  <button onClick={() => handleCantidadChange("decrease")}>
                    -
                  </button>
                  {cantidad}
                  <button onClick={() => handleCantidadChange("increase")}>
                    +
                  </button>
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="submit-button">
          <Button type="submit" label={"Enviar"} color={"black-button"} />
        </div>
      </div>
    </form>
  );
};
