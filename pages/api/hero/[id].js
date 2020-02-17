import fetch from "isomorphic-unfetch";
import getConfig from "next/config";
const { publicRuntimeConfig: config } = getConfig();

export default async (req, res) => {
  const {
    query: { id }
  } = req;

  const result = await fetch(
    `http://www.superheroapi.com/api/${config.SUPERHEROAPI_KEY}/${id}`
  );

  const data = await result.json();

  res.send(data);
};
