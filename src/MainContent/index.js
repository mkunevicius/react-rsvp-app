import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import GuestList from './GuestList';
import ConfirmedFilter from './ConfirmedFilter';

const MainContent = props =>
	<div className="main">
		<ConfirmedFilter 
			isFiltered={props.isFiltered}
			toggleFilter={props.toggleFilter}
		/>

		<Counter 
			totalInvited={props.totalInvited}
			numberAttending={props.numberAttending}
			numberUnconfirmed={props.numberUnconfirmed}
		/>

		<GuestList 
			guests={props.guests} 
			toggleConfirmation={props.toggleConfirmation}
			toggleEditingAt={props.toggleEditingAt}
			setName={props.setName}
			isFiltered={props.isFiltered}
			removeGuest={props.removeGuest}
			pendingGuest={props.pendingGuest}
		/>
	</div>

	MainContent.propTypes = {
		totalInvited: PropTypes.number,
    numberAttending: PropTypes.number,
    numberUnconfirmed: PropTypes.number,
    guests: PropTypes.array.isRequired,
    toggleConfirmation: PropTypes.func.isRequired,
    toggleEditingAt: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
  	isFiltered: PropTypes.bool.isRequired,
    removeGuest: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
    toggleFilter: PropTypes.func.isRequired,
	}

export default MainContent;