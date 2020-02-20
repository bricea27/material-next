import getConfig from 'next/config';
import { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import SyncIcon from '@material-ui/icons/Sync';

import Characters from 'components/super-showdown/characters';
import Character from 'components/super-showdown/character';

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
	const initialState = {
		loading: true,
		character1: null,
		character2: null
	};
	const [state, setState] = useState(initialState);

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
		setState(state => ({ ...state, ...initialState }));
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
				<Character data={state.character1} />

				<IconButton onClick={handleClickShuffle}>
					<SyncIcon />
				</IconButton>

				<Character data={state.character2} />
			</Characters>
		</Container>
	);
}
