import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
}));

export default function LoginCard() {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography variant='h5' component='h2'>
					concat(collective)
				</Typography>
				{/* login form needs to go here */}
				<form className={classes.root} noValidate autoComplete='off'>
					<TextField id='outlined-basic' label='username' variant='outlined' />
          <TextField id='outlined-basic' label='password' variant='outlined' />
          <Button size='small'>Login</Button>
				</form>
				<Typography className={classes.pos} color='textSecondary'>
					OR
				</Typography>
				{/* create new account Button */}
        <Button size='small'>create new account</Button>
				{/* signin via google button */}
        <Button size='small'>login with Google</Button>
			</CardContent>
		</Card>
	);
}
