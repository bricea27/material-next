import getConfig from 'next/config';
import { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Characters from 'components/super-showdown/characters';
import Character from 'components/super-showdown/character';
import CharacterImage from 'components/super-showdown/character-image';
import CharacterTitle from 'components/super-showdown/character-title';

const { publicRuntimeConfig: config } = getConfig();
const ID_LIMIT = 731;

const getRandomId = () => {
	return Math.floor(Math.random() * ID_LIMIT) + 1;
};

const useStyles = makeStyles(theme => ({
	root: {
		height: '100vh',
		padding: theme.spacing(2)
	}
}));

export default function Index() {
	const classes = useStyles();
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

	return (
		<Container className={classes.root}>
			{!state.loading && (
				<Characters>
					{state.characters.map(character => {
						return (
							<Character key={character.id}>
								<CharacterImage
									image={character.image.url}
									title={character.name}
								/>
								<CharacterTitle>{character.name}</CharacterTitle>
							</Character>
						);
					})}
				</Characters>
			)}
		</Container>
	);
}
