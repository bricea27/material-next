import { motion } from 'framer-motion';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const item = {
	hidden: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 }
		}
	},
	show: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 }
		}
	}
};

const useStyles = makeStyles(() => ({
	root: {
		minWidth: 400
	}
}));

export default function Character(props) {
	const classes = useStyles();

	return (
		<motion.div variants={item}>
			<Card className={classes.root}>{props.children}</Card>
		</motion.div>
	);
}
