import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(() => ({
	root: {
		height: 200
	}
}));

export default function Character(props) {
	const classes = useStyles();
	return <CardMedia {...props} className={classes.root} />;
}
