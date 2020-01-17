import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DayPicker from "react-day-picker";
import style from "./Timer.scss"

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedDay: props.date ? new Date(props.date) : undefined
        };
      }
    
      handleDayClick = (selectedDay, { selected, disabled }) => {
        if (disabled) {
          return;
        }
        if (selected) {
          // Unselect the day if already selected
          this.setState({ selectedDay: undefined });
          return;
        }
        this.setState({ selectedDay });
      };
    
      handleSave = () => {
        const { selectedDay } = this.state;
        const { dispatch, cardId, toggleCalendar } = this.props;
        dispatch({
          type: "CHANGE_CARD_DATE",
          payload: { date: selectedDay, cardId }
        });
        toggleCalendar();
      };
    
      render() {
        const { selectedDay } = this.state;
        const { toggleCalendar } = this.props;
        return (
          <div className="calendar">
            <DayPicker
              onDayClick={this.handleDayClick}
              selectedDays={selectedDay}
              disabledDays={{ before: new Date() }}
            />
            <div className="calendar-buttons">
              <button onClick={this.handleSave} className="calendar-save-button">
                Saveetwerw
              </button>
              <button onClick={toggleCalendar}>Cancel</button>
            </div>
          </div>
        );
      }
    }
    
    // export default connect()(Timer);
