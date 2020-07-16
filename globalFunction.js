const log = (data) => {
  console.log("Log: ", data);
};

const warn = (data) => {
  console.warn("Warning: ", data);
};

const info = (data) => {
  console.info("Info: ", data);
};

const error = (data) => {
  console.error("Error: ", data);
};

module.exports = { log, warn, info, error };
