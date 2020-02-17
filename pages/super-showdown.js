import getConfig from "next/config";
import { useEffect, useState } from "react";

import Typography from "@material-ui/core/Typography";

const { publicRuntimeConfig: config } = getConfig();
const ID_LIMIT = 731;

export default function Index() {
  const { API, SELF_URL } = config;
  const [state, setState] = useState({ characters: [] });

  const getCharacter = async id => {
    const result = await fetch(`${SELF_URL}${API}/hero/${id}`);
    const data = await result.json();
    return data;
  };

  const getRandomId = () => {
    return Math.floor(Math.random() * ID_LIMIT) + 1;
  };

  const getCharacters = async () => {
    const characters = await Promise.all([
      getCharacter(getRandomId()),
      getCharacter(getRandomId())
    ]);
    setState(state => ({ ...state, characters }));
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <>
      <Typography variant="h1">Super Showdown</Typography>
      {state.characters.map(character => {
        return (
          <Typography key={character.id} variant="h2">
            {character.name}
          </Typography>
        );
      })}
    </>
  );
}
