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
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
} from "reactstrap";
import EasyPieChart from "easy-pie-chart";

import CardTool from "../Common/CardTool";
import Sparkline from "../Common/Sparklines";
import Scrollable from "../Common/Scrollable";
import FlotChart from "../Charts/Flot";
import Now from "../Common/Now";

import "../../styles/home.css";

//CALENDAR
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/list/main.css";
import "@fullcalendar/bootstrap/main.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import bootstrapPlugin from "@fullcalendar/bootstrap";

import events from '../Extras/Calendar.events';

class DashboardV1 extends Component {
  calendarEvents = events;

  calendarPlugins = [
    interactionPlugin,
    dayGridPlugin,
    timeGridPlugin,
    listPlugin,
    bootstrapPlugin,
  ];

  calendarHeader = {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
  };

  // External events properties

  evColors = [
    "danger",
    "primary",
    "info",
    "success",
    "warning",
    "green",
    "pink",
    "inverse",
    "purple",
  ];

  state = {
    selectedEvent: null,
    evRemoveOnDrop: false,
    evSelectedColor: this.evColors[0],
    evNewName: "",
    externalEvents: [
     {}
    ],
  };

 /*  componentDidMount() {
   
    new Draggable(this.refs.externalEventsList, {
      itemSelector: ".fce-event",
      eventData: function (eventEl) {
        return {
          title: eventEl.innerText.trim(),
        };
      },
    });
  } */

/*   addRandomEvent() {
    
    this.addEvent({
      title: "Random Event",
      start: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        Math.random() * (30 - 1) + 1
      ),
      backgroundColor: "#c594c5", //purple
      borderColor: "#c594c5", //purple
    });
  } */

  dayClick = (date) => {
    this.setState({
      selectedEvent: {
        date: date.dateStr,
      },
    });
  };

  // add event directly into calendar
  addEvent(event) {
    this.calendarEvents.push(event);
  }

  handleEventReceive = (info) => {
    var styles = getComputedStyle(info.draggedEl);
    info.event.setProp("backgroundColor", styles.backgroundColor);
    info.event.setProp("borderColor", styles.borderColor);

    // is the "remove after drop" checkbox checked?
    if (this.state.evRemoveOnDrop) {
      this.removeExternalEvent(info.draggedEl.textContent);
    }
  };

  getEvColorClasses(evcolor) {
    return (
      "bg-" +
      evcolor +
      (this.state.evSelectedColor === evcolor ? " selected" : "")
    );
  }

  addNewExternalEvent = () => {
    const externalEvents = this.state.externalEvents.concat({
      color: this.state.evSelectedColor,
      name: this.state.evNewName,
    });
    this.setState({
      externalEvents,
    });
  };
  removeExternalEvent = (name) => {
    let externalEvents = [...this.state.externalEvents];
    const index = externalEvents.findIndex((e) => e.name === name);
    if (index > -1) {
      externalEvents.splice(index, 1);
      this.setState({
        externalEvents,
      });
    }
  };

  selectColor = (color) => () => {
    this.setState({
      evSelectedColor: color,
    });
  };

  handleCheck = (event) => {
    this.setState({
      evRemoveOnDrop: event.target.checked,
    });
  };

  handleInputName = (event) => {
    this.setState({
      evNewName: event.target.value,
    });
  };

  render() {
    const { externalEvents, selectedEvent } = this.state;
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
                    <strong>Crear Hora</strong>
                  </Button>{" "}
                </div>               
              </div>
              <div className="pl-2 pr-2 row">
                <div className="card-body mt-0">
                  <div className="calendar-app">
                    <div className="row">                   
                      <div className="col-xl-12 col-lg-12">
                        <Card className="card-default">
                          <CardBody>
                            {/* START calendar */}
                            <FullCalendar
                              defaultView={this.dayGridMonth}
                              plugins={this.calendarPlugins}
                              events={this.calendarEvents}
                              themeSystem={"bootstrap"}
                              header={this.calendarHeader}
                              editable={true}
                              droppable={true}
                              deepChangeDetection={true}
                              dateClick={this.dayClick}
                              eventReceive={this.handleEventReceive}
                            ></FullCalendar>
                          </CardBody>
                        </Card>
                      </div>
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

export default withNamespaces("translations")(DashboardV1);
