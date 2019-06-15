import React from 'react';
import PropTypes from 'prop-types';
import GuestInputForm from './GuestInputForm';

const Header = props =>
	<header>
		<h1>RSVP</h1>
		<p>Best Party Ever</p>
		<GuestInputForm 
			handleGuestSubmit={props.handleGuestSubmit}
			handleNameInput={props.handleNameInput}
			pendingGuest={props.pendingGuest}
		/>
	</header>

Header.propTypes = {
	handleGuestSubmit: PropTypes.func.isRequired,
	handleNameInput: PropTypes.func.isRequired,
	pendingGuest: PropTypes.string.isRequired
}

export default Header;