require("dotenv").config();

module.exports = {
  publicRuntimeConfig: {
    API: process.env.API,
    SELF_URL: process.env.SELF_URL,
    SUPERHEROAPI_KEY: process.env.SUPERHEROAPI_KEY
  }
};
