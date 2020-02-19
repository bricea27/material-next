import { motion } from 'framer-motion';

import { makeStyles } from '@material-ui/core/styles';

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.5
		}
	}
};

const useStyles = makeStyles(() => ({
	root: {
		width: '100%',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-evenly'
	}
}));

export default function Characters(props) {
	const classes = useStyles();

	return (
		<motion.div
			className={classes.root}
			variants={container}
			initial="hidden"
			animate="show"
		>
			{props.children}
		</motion.div>
	);
}
