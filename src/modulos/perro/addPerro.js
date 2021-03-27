import React, { useEffect, useState } from "react";
import ContentWrapper from "../../_layout/ContentWrapper";
import { FormGroup, Row, Col, Button } from "reactstrap";
import InputField from "../../_framework/_helpers/smart-table/inputs-form/InputField";
import { Badge } from "reactstrap";
import Select from "react-select";

import parseSelect from "../helpers/parseSelect";

import getApi from "../../utils/api/index";
import $ from "jquery";
import swal from "sweetalert";

//ESTILOS CSS
import "parsleyjs/dist/parsley.min.js";
import "parsleyjs/dist/i18n/es";
import "../../styles/custom.css";

const AddPerro = (props) => {
  //STATE DE DEL FORMULARIO
  const [idForm] = useState("form-id-" + new Date().getTime());

  //STATE DEL COMPONENTE
  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("");
  const [edad, setEdad] = useState("");
  const [raza, setRaza] = useState("");
  const [selectRaza, setSelectRaza] = useState([]);

  // STATE DE ERRORES
  const [hasErrors, setHasErrors] = useState(false);
  const [msgErrors, setMsgErrors] = useState({});
  const [typeError, setTypeError] = useState(1);

  // STATE DE CARGA
  const [isReadyRaza, setIsReadyRaza] = useState(false);

  useEffect(() => {
    const getListRaza = () => {
      const url = `/raza/list`;
      getApi(url, "GET", null, (status, data, message) => {
        console.log(status, data, message);
        if (!status) {
          return console.log(message);
        }
        setSelectRaza(parseSelect(data, "RAZA"));
        setIsReadyRaza(true);
      });
    };
    getListRaza();
  }, []);

  const instanceValid = () => {
    const instance = $("#" + idForm).parsley({
      errorsContainer: function (el) {
        return el.$element.closest(".form-group");
      },
      errorClass: "is-invalid",
    });
    instance.validate();
    if (!instance.isValid()) return null;
  };

  const datosVacios = () => {
    if (
      nombre.length === 0 ||
      color.length === 0 ||
      edad.length === 0 ||
      raza.length === 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //VALIDAR DATOS
    instanceValid();

    if (datosVacios()) {
      swal({
        title: "Faltan Datos",
        text: "Ingrese Datos del Perro",
        icon: "error",
      });
      return null;
    }

    let datos = {
      perro_nombre: nombre,
      perro_color: color,
      perro_edad: edad,
      perro_raza_id: raza["raza"]["id"],
    };

    const url = `/perro/store`;
    getApi(url, "POST", datos, (status, data, message, re) => {
      console.log(status, data, message, re);
      if (status) {
        swal({
          title: "Correcto",
          text: "Perro agregado con exito.",
          icon: "success",
          buttons: true,
        }).then((willDelete) => {
          if (!willDelete) {
            props.history.push(`/mantenedores/perro`);
          } else {
            props.history.push(`/mantenedores/perro`);
          }
        });
      } else {
        swal({
          title: "Error",
          text: message,
          icon: "error",
        });
        if (
          re.hasOwnProperty("type_error") &&
          re.type_error === "validation_error"
        ) {
          setHasErrors(true);
          setMsgErrors(data); //Mensaje de Error " Dato Incorrecto"
          setTypeError(1);
        } else {
          setHasErrors(true);
          setMsgErrors(message); //Mensaje de Error " Dato Incorrecto"
          setTypeError(2);
        }
      }
    });
  };

  const clickReturn = () => {
    props.history.push(`/mantenedores/perro`);
  };

  const ErrorMsg = () => {
    if (typeError === 2) {
      return (
        <div className="messages">
          <div className="alert alert-danger">
            <strong>Error interno</strong>
            <pre>{JSON.stringify(msgErrors, null, 2)}</pre>
          </div>
        </div>
      );
    } else {
      return (
        <div className="messages">
          <div className="alert alert-danger">
            <strong>Información faltante</strong>
            <ul>
              {Object.keys(msgErrors).map((i) => {
                return <li key={i}>{msgErrors[i]} </li>;
              })}
            </ul>
          </div>
        </div>
      );
    }
  };

  return (
    <ContentWrapper>
      <div className="content-heading">
        <div>
          <Badge color="primary" pill>
            Nuevo Perro
          </Badge>
        </div>
        <div className="ml-auto">
          <button className={"btn btn-info"} onClick={() => clickReturn()}>
            Regresar
          </button>
        </div>
      </div>
      <div className="p-0">
        <Row className="d-flex justify-content-center mb-1">
          <Col xl="12">
            <div className="card card-default">
              <div className="card-header mb-0">
                <div className="text-tittle-card mt-1">
                  <em className="fas fa-sync"></em>&nbsp;Crear Perro.
                </div>
                <hr></hr>
              </div>
              <div className="container fluid">
                <div className="card-body mt-0">
                  {hasErrors && <ErrorMsg />}
                  <form
                    onSubmit={onSubmit}
                    className="form-horizontal"
                    id={idForm}
                  >
                    <FormGroup className="d-flex justify-content-center">
                      <label className="col-xl-2 col-form-label text-input field-required">
                        Nombre
                      </label>
                      <div className="col-xl-6">
                        <InputField
                          onChange={(e) => {
                            setNombre(e.target.value);
                          }}
                          type="text"
                          placeholder="Nombre"
                          isRequired={true}
                        />
                      </div>
                    </FormGroup>
                    <FormGroup className=" d-flex justify-content-center">
                      <label className="col-xl-2 col-form-label text-input field-required">
                        Color
                      </label>
                      <div className="col-xl-6">
                        <InputField
                          onChange={(e) => {
                            setColor(e.target.value);
                          }}
                          type="text"
                          placeholder="Color"
                          isRequired={true}
                        />
                      </div>
                    </FormGroup>
                    <FormGroup className="d-flex justify-content-center">
                      <label className="col-xl-2 col-form-label text-input field-required">
                        Edad
                      </label>
                      <div className="col-xl-6">
                        <InputField
                          onChange={(e) => {
                            setEdad(e.target.value);
                          }}
                          type="number"
                          placeholder="Edad"
                          isRequired={true}
                        />
                      </div>
                    </FormGroup>
                    <FormGroup className="d-flex justify-content-center">
                      <label className="col-xl-2 col-form-label text-input field-required">
                        Raza
                      </label>
                      <div className="col-xl-6">
                        <Select
                          name="raza"
                          placeholder="Seleccione Raza"
                          onChange={(e) => {
                            setRaza(e);
                            console.log(e);
                          }}
                          value={
                            raza.label
                              ? { label: raza.label }
                              : { label: "Seleccione Raza" }
                          }
                          options={selectRaza}
                          isLoading={!isReadyRaza}
                          loadingMessage={() => "Cargando..."}
                          noOptionsMessage={() => "Sin Resultados..."}
                          isRequired={true}
                        />
                      </div>
                    </FormGroup>
                    <FormGroup row className="mb-4 mt-4 justify-content-center">
                      <div className="col-xl-6">
                        <Button
                          block
                          className="text-bold"
                          size="xl"
                          onClick={onSubmit}
                          color="success"
                        >
                          Crear Perro
                        </Button>
                      </div>
                    </FormGroup>
                  </form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </ContentWrapper>
  );
};

export default AddPerro;
