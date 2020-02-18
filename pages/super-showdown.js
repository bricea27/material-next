import getConfig from 'next/config';
import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

import Typography from '@material-ui/core/Typography';

const { publicRuntimeConfig: config } = getConfig();
const ID_LIMIT = 731;

const getRandomId = () => {
	return Math.floor(Math.random() * ID_LIMIT) + 1;
};

export default function Index() {
	const { API, SELF_URL } = config;
	const [state, setState] = useState({ loading: true, characters: [] });

	const getCharacter = async id => {
		const result = await fetch(`${SELF_URL}${API}/character/${id}`);
		const data = await result.json();
		return data;
	};

	const getCharacters = async () => {
		const characters = await Promise.all([
			getCharacter(getRandomId()),
			getCharacter(getRandomId())
		]);
		setState(state => ({ ...state, loading: false, characters }));
	};

	useEffect(() => {
		getCharacters();
	}, []);

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.5
			}
		}
	};

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

	return (
		<>
			<Typography variant="h1">Super Showdown</Typography>
			{!state.loading && (
				<motion.div variants={container} initial="hidden" animate="show">
					{state.characters.map(character => {
						return (
							<motion.div key={character.id} variants={item}>
								<Typography variant="h2">{character.name}</Typography>
							</motion.div>
						);
					})}
				</motion.div>
			)}
		</>
	);
}
