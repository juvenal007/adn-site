import React, { Component } from "react";
import { withNamespaces, Trans } from "react-i18next";
import ContentWrapper from "../Layout/ContentWrapper";
import {
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Tooltip,
  Progress,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Badge,
  Collapse,
  Table,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import { Link } from "react-router-dom";
// EasyPieChart
import EasyPieChart from "easy-pie-chart";

import Sparkline from "../Common/Sparklines";
import FlotChart from "../Charts/Flot";

import "../../styles/home.css";

/**
 * Wrap an element and assign automatically an ID,
 * creates a handler to show/hide tooltips without
 * the hassle of creating new states and class methods.
 * Support only one child and simple text content.
 */
class BSTooltip extends Component {
  // static propTypes { content: PropTypes.string }
  state = {
    _id: "id4tooltip_" + new Date().getUTCMilliseconds(),
    tooltipOpen: false,
  };
  toggle = (e) => {
    this.setState({ tooltipOpen: !this.state.tooltipOpen });
  };
  render() {
    return [
      <Tooltip
        {...this.props}
        isOpen={this.state.tooltipOpen}
        toggle={this.toggle}
        target={this.state._id}
        key="1"
      >
        {this.props.content}
      </Tooltip>,
      React.cloneElement(React.Children.only(this.props.children), {
        id: this.state._id,
        key: "2",
      }),
    ];
  }
}

class DashboardV2 extends Component {
  state = {
    activeTab: "1",
    key: 1,
    // array with each accordion state (open/close)
    accordionState: [true, false, false],
    // choose to show open only one or more at the same time
    oneAtATime: true,
  };

  toggleAccordion = (id) => {
    let accordionState = this.state.accordionState.map((val, i) => {
      return id === i ? !val : this.state.oneAtATime ? false : val;
    });
    this.setState({
      accordionState,
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
              <span className="m-0 titulo">Centro Oftalmológico Mi Visión</span>
              <p className="m-0 sub-titulo">TALCA - Dirección</p>
            </div>
          </div>
        </div>
        <div className="row p-1">
          <div className="col-12">
            <div className="card card-default">
              <div className="card-header ml-3 mr-2 mt-3 p-0">
                <div className="text-tittle-card mt-1">
                  <em className="fas fa-sync"></em>&nbsp;&nbsp;Agenda
                  &nbsp;&nbsp;{" "}
                  <Button color="primary">
                    <em className="fas fa-plus"></em>&nbsp;&nbsp;
                    <strong>Crear Hora</strong>
                  </Button>{" "}
                </div>
              </div>
              <div className="pl-2 pr-2 row">
                <div className="card-body mt-0">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12">
                      <Card className="card-default">
                        <CardHeader onClick={() => this.toggleAccordion(0)}>
                          <div className="text-tittle-card mt-1">
                            <em className="fas fa-user"></em>
                            &nbsp;&nbsp;{" "}
                            <Badge color="secondary" pill>
                              Tecnólogo Nombre Apellido{" "}
                            </Badge>
                            &nbsp;&nbsp;{" "}
                          </div>
                        </CardHeader>
                        <Collapse isOpen={this.state.accordionState[0]}>
                          <CardBody className="border-top">
                            <Table hover className="col-12">
                              <thead>
                                <th> # </th>
                                <th>Hora</th>
                                <th>Exámen</th>
                                <th>Máquina</th>
                                <th>Box</th>
                                <th>Descripción</th>
                                <th>Cliente</th>
                                <th>Indicación</th>
                                <th>Estado</th>
                                <th className="text-center">Panel</th>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={false}
                                          color="red"
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-2</td>
                                  <td>Máquina 3</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="success">S/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </CardBody>
                        </Collapse>
                      </Card>
                    </div>

                    <div className="col-xl-12 col-lg-12">
                      <Card className="card-default">
                        <CardHeader onClick={() => this.toggleAccordion(0)}>
                          <div className="text-tittle-card mt-1">
                            <em className="fas fa-user"></em>
                            &nbsp;&nbsp;{" "}
                            <Badge color="secondary" pill>
                              Tecnólogo Nombre Apellido{" "}
                            </Badge>
                            &nbsp;&nbsp;{" "}
                          </div>
                        </CardHeader>
                        <Collapse isOpen={this.state.accordionState[0]}>
                          <CardBody className="border-top">
                            <Table hover className="col-12">
                              <thead>
                                <th> # </th>
                                <th>Hora</th>
                                <th>Exámen</th>
                                <th>Máquina</th>
                                <th>Box</th>
                                <th>Descripción</th>
                                <th>Cliente</th>
                                <th>Indicación</th>
                                <th>Estado</th>
                                <th className="text-center">Panel</th>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={false}
                                          color="red"
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-2</td>
                                  <td>Máquina 3</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="success">S/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </CardBody>
                        </Collapse>
                      </Card>
                    </div>

                    <div className="col-xl-12 col-lg-12">
                      <Card className="card-default">
                        <CardHeader onClick={() => this.toggleAccordion(0)}>
                          <div className="text-tittle-card mt-1">
                            <em className="fas fa-user"></em>
                            &nbsp;&nbsp;{" "}
                            <Badge color="secondary" pill>
                              Tecnólogo Nombre Apellido{" "}
                            </Badge>
                            &nbsp;&nbsp;{" "}
                          </div>
                        </CardHeader>
                        <Collapse isOpen={this.state.accordionState[0]}>
                          <CardBody className="border-top">
                            <Table hover className="col-12">
                              <thead>
                                <th> # </th>
                                <th>Hora</th>
                                <th>Exámen</th>
                                <th>Máquina</th>
                                <th>Box</th>
                                <th>Descripción</th>
                                <th>Cliente</th>
                                <th>Indicación</th>
                                <th>Estado</th>
                                <th className="text-center">Panel</th>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={false}
                                          color="red"
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-2</td>
                                  <td>Máquina 3</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="success">S/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </CardBody>
                        </Collapse>
                      </Card>
                    </div>

                    <div className="col-xl-12 col-lg-12">
                      <Card className="card-default">
                        <CardHeader onClick={() => this.toggleAccordion(0)}>
                          <div className="text-tittle-card mt-1">
                            <em className="fas fa-user"></em>
                            &nbsp;&nbsp;{" "}
                            <Badge color="secondary" pill>
                              Tecnólogo Nombre Apellido{" "}
                            </Badge>
                            &nbsp;&nbsp;{" "}
                          </div>
                        </CardHeader>
                        <Collapse isOpen={this.state.accordionState[0]}>
                          <CardBody className="border-top">
                            <Table hover className="col-12">
                              <thead>
                                <th> # </th>
                                <th>Hora</th>
                                <th>Exámen</th>
                                <th>Máquina</th>
                                <th>Box</th>
                                <th>Descripción</th>
                                <th>Cliente</th>
                                <th>Indicación</th>
                                <th>Estado</th>
                                <th className="text-center">Panel</th>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={false}
                                          color="red"
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-2</td>
                                  <td>Máquina 3</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="success">S/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <FormGroup check>
                                      <Label check>
                                        <Input
                                          type="checkbox"
                                          disabled={true}
                                        />
                                        &nbsp;
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td>
                                    <strong>8:30 - 9:00</strong>
                                  </td>
                                  <td>Ctra-1</td>
                                  <td>Máquina 1</td>
                                  <td>Box 2</td>
                                  <td>Ocular</td>
                                  <td>
                                    <Link to={`#`}>Alfredo Valdés</Link>
                                  </td>
                                  <td>Sin Maquillaje</td>
                                  <td>
                                    <Badge color="danger">N/D</Badge>
                                  </td>
                                  <td className="d-flex align-content-center justify-content-center">
                                    <Button outline color="warning">
                                      <em className="fas fa-trash"></em>
                                    </Button>{" "}
                                    &nbsp; &nbsp;
                                    <Button outline color="primary">
                                      <em className="fas fa-info"></em>
                                    </Button>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </CardBody>
                        </Collapse>
                      </Card>
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

export default withNamespaces("translations")(DashboardV2);
