import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import ContentWrapper from "../_layout/ContentWrapper";
import SmartTable from "../_framework/_helpers/smart-table/table/SmartTable";

import "../styles/custom.css";

import configPerro from "./config/configPerro";
import configRaza from "./config/configRaza";

import "../styles/home.css";

/**
 * Wrap an element and assign automatically an ID,
 * creates a handler to show/hide tooltips without
 * the hassle of creating new states and class methods.
 * Support only one child and simple text content.
 */


class HomePrincipal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activeTab: "1",
      key: 1,
      // array with each accordion state (open/close)
      // choose to show open only one or more at the same time
      oneAtATime: true,
      idCheck: null,
    };
  }
  componentDidMount() {}

  uncheck = () => {
    let inputCheck = document.getElementById(this.state.idCheck);
    inputCheck.checked = false;
    this.toggleModal();
  };

  onClosed = () => {
    console.log(this.state.idCheck);
    let inputCheck = document.getElementById(this.state.idCheck);
    inputCheck.checked = false;
  };

  handleChange = (e) => {
    console.log(e.target.id);
    this.setState({
      idCheck: e.target.id,
      modal: !this.state.modal,
    });
  };

  render() {
    return (
      <ContentWrapper unwrap>
        <div
          className="bg-cover"
          style={{ backgroundImage: "url(img/background_home3.jpg)" }}
        >
          <div className="p text-center text-white">
            <div className="padre">
              <span className="m-0 titulo">Software Test</span>
              <p className="m-0 sub-titulo">ADN Digital</p>
            </div>
          </div>
        </div>
        <div className="row p-1">
          <div className="col-12">
            <div className="card card-default">
              <div className="card-header ml-3 mr-2 mt-3 p-0">
                <div className="text-tittle-card mt-1">
                  <em className="fas fa-sync"></em>&nbsp;&nbsp;Listado
                </div>
              </div>
              <div className="pl-2 pr-2 row">
                <div className="card-body mt-0">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12">
                      <SmartTable
                        dtColumns={configPerro.columns}
                        edit_btn={configPerro.edit_btn}
                        delete_btn={configPerro.delete_btn}
                        add_btn={configPerro.add_btn}
                        actions_custom={configPerro.actions_custom}
                        list_data={configPerro.list} // url con la data
                        pk_key="id" // pk de las lineas
                        model_p="Perros" // titulo grilla
                        model_s="Perro" // titulo form
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pl-2 pr-2 row">
                <div className="card-body mt-0">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12">
                      <SmartTable
                        dtColumns={configRaza.columns}
                        edit_btn={configRaza.edit_btn}
                        delete_btn={configRaza.delete_btn}
                        add_btn={configRaza.add_btn}
                        actions_custom={configRaza.actions_custom}
                        list_data={configRaza.list} // url con la data
                        pk_key="id" // pk de las lineas
                        model_p="Razas" // titulo grilla
                        model_s="Raza" // titulo form
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    );
  }
}

export default withNamespaces("translations")(HomePrincipal);
