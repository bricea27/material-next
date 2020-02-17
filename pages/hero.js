import getConfig from "next/config";
import { useEffect } from "react";

import Typography from "@material-ui/core/Typography";

const { publicRuntimeConfig: config } = getConfig();

export default function Index() {
  const { SELF_URL } = config;

  console.log("config", config);

  const getHero = async id => {
    const url = `${SELF_URL}/api/hero/${id}`;
    console.log("url", url);
    const result = await fetch(url);
    const data = await result.json();
    return data;
  };

  useEffect(() => {
    getHero(1).then(res => {
      console.log("hero", res);
    });
  }, []);

  return <Typography variant="h1">Hello World</Typography>;
}
