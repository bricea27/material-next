import getConfig from 'next/config';
import { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import SyncIcon from '@material-ui/icons/Sync';

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
	const [state, setState] = useState({ loading: true });

	const getCharacter = async id => {
		const result = await fetch(`${SELF_URL}${API}/character/${id}`);
		const data = await result.json();
		return data;
	};

	const getCharacters = async () => {
		const character1 = await getCharacter(getRandomId());
		setState(state => ({ ...state, character1 }));

		const character2 = await getCharacter(getRandomId());
		setState(state => ({ ...state, character2 }));
	};

	const handleClickShuffle = async () => {
		setState(state => ({ ...state, loading: true }));
		await getCharacters();
		setState(state => ({ ...state, loading: false }));
	};

	useEffect(() => {
		getCharacters().then(() => {
			setState(state => ({ ...state, loading: false }));
		});
	}, []);

	return (
		<Container className={classes.root}>
			<Characters>
				{state.character1 ? (
					<Character>
						<CharacterImage
							image={state.character1.image.url}
							title={state.character1.name}
						/>
						<CharacterTitle>{state.character1.name}</CharacterTitle>
					</Character>
				) : (
					<Character>Loading</Character>
				)}

				<IconButton onClick={handleClickShuffle}>
					<SyncIcon />
				</IconButton>

				{state.character2 ? (
					<Character>
						<CharacterImage
							image={state.character2.image.url}
							title={state.character2.name}
						/>
						<CharacterTitle>{state.character2.name}</CharacterTitle>
					</Character>
				) : (
					<Character>Loading</Character>
				)}
			</Characters>
		</Container>
	);
}
