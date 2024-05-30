import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Footer, BurgerMenu } from "../../shared";
import { Post } from "../../services";

import "./IssueForm.css";

export const IssueForm = () => {
  const [title, setTitle] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedZone, setSelectedZone] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("");
  const [details, setDetails] = useState("");
  const [periodificar, setPeriodificar] = useState(false);
  const [periodo, setPeriodo] = useState("días");
  const [cantidad, setCantidad] = useState(1);
  const [selectedImages, setSelectedImages] = useState([]);

  const navigate = useNavigate();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

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

    const issueToSubmit = {
      sender: "red",
      title: title,
      description: details,
      status: "open",
      verified: false,
      created_at: new Date().toLocaleDateString(),
    };

    console.log(issueToSubmit);

    Post("issues", issueToSubmit);

    setTitle("");
    setDetails("");

    navigate("/home");
  };

  return (
    <>
      <form className="issue-form" onSubmit={handleSubmit}>
        <div className="container">
          <div className="title row">
            <div className="col-12">
              <button className="form-issue__button">
                <img src="/assets/icons/back.png" alt="" />
              </button>
              <h1>ISSUE </h1>
              <h1> #ID</h1>
              <h1>| dd-mm-aa</h1>
            </div>
          </div>
          <div className="row">
            <input
              className="col-12 "
              type="text"
              placeholder="titol issue"
              name="title"
              onChange={handleTitleChange}
            />
          </div>
          <div className="row">
            <div className="col-5">
              <label className="issue-label" htmlFor="department">
                Departaments:
              </label>
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
              <select
                className="issue-form__select"
                id="zone"
                value={selectedZone}
                onChange={handleZoneChange}
              >
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
                  type="button"
                  className={selectedPriority === "1" ? "selected" : ""}
                  onClick={() => handlePriorityChange("1")}
                ></button>
                <button
                  type="button"
                  className={selectedPriority === "2" ? "selected" : ""}
                  onClick={() => handlePriorityChange("2")}
                ></button>
                <button
                  type="button"
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
                className="issue-form__textarea"
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
                    <button
                      className="form-issue__button"
                      onClick={() => handleCantidadChange("decrease")}
                    >
                      -
                    </button>
                    {cantidad}
                    <button
                      className="form-issue__button"
                      onClick={() => handleCantidadChange("increase")}
                    >
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
      <Footer />
      <BurgerMenu />
    </>
  );
};
