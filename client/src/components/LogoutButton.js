import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1.5),
		color: 'white',
	},
}));

function LogoutButton() {
  //to use styles
  const classes = useStyles();
  
  const { logout } = useAuth0();
  
	return (
		<Button
			onClick={() =>
				logout({
					returnTo: window.location.origin,
				})
			}
			variant='danger'
			className={classes.button}
		>
			Log Out
		</Button>
	);
}

export default LogoutButton;
