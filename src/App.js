import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import MainContent from './MainContent';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: '',
    guests: []
  }

  lastGuestId = 0;

  newGuestId = () => {
    const id = this.lastGuestId;
    this.lastGuestId += 1;
    return id;
  }

  toggleGuestPropertyAt = (property, id) => 
    this.setState({
      guests: this.state.guests.map((guest) => {
        if (id === guest.id) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    });

  toggleConfirmation = id =>
    this.toggleGuestPropertyAt('isConfirmed', id);

  removeGuest = id =>
    this.setState({
      guests: this.state.guests.filter(guest => id !== guest.id)
    });

  toggleEditingAt = id =>
    this.toggleGuestPropertyAt('isEditing', id);

  setNameAt = (name, id) => 
  this.setState({
    guests: this.state.guests.map((guest) => {
      if (id === guest.id) {
        return {
          ...guest,
          name
        };
      }
      return guest;
    })
  });

  toggleFilter = () => 
    this.setState({isFiltered: !this.state.isFiltered});

  handleNameInput = e =>
    this.setState({pendingGuest: e.target.value})

  handleGuestSubmit = e => {
    e.preventDefault();
    const id = this.newGuestId();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
          id
        },
        ...this.state.guests
      ],
      pendingGuest: ''
    });
  }

  getTotalInvited = () => this.state.guests.length;

  getAttendingGuests = () =>
    this.state.guests.reduce(
      (total, guest) => guest.isConfirmed ? total + 1 : total, 
      0
    );

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;

    return (
      <div className="App">
        <Header 
          handleGuestSubmit={this.handleGuestSubmit}
          handleNameInput={this.handleNameInput}
          pendingGuest={this.state.pendingGuest} 
        />
        <MainContent 
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
          guests={this.state.guests} 
          toggleConfirmation={this.toggleConfirmation}
          toggleEditingAt={this.toggleEditingAt}
          setNameAt={this.setNameAt}
          isFiltered={this.state.isFiltered}
          removeGuest={this.removeGuest}
          pendingGuest={this.state.pendingGuest}
          toggleFilter={this.toggleFilter}
        />
      </div>
    );
  }
}

export default App;
