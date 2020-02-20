import { motion } from 'framer-motion';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Skeleton from '@material-ui/lab/Skeleton';

import CharacterImage from 'components/super-showdown/character-image';
import CharacterStats from 'components/super-showdown/character-stats';
import CharacterTitle from 'components/super-showdown/character-title';

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

export default function Character({ data }) {
	const classes = useStyles();

	return (
		<motion.div variants={item}>
			<Card className={classes.root}>
				{data ? (
					<CharacterImage image={data.image.url} title={data.name} />
				) : (
					<Skeleton animation="wave" variant="rect" height={200} />
				)}
				{data ? (
					<CharacterTitle>{data.name}</CharacterTitle>
				) : (
					<Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
				)}
				{data && <CharacterStats stats={data.powerstats} />}
			</Card>
		</motion.div>
	);
}
