const getInfoLog = (req) => {
  return `INFO: ${req.method} request to ${
    req.url
  } at ${new Date().toISOString()}`;
};

const getErrorLog = (error) => {
  return `ERROR: ${error.message} at ${new Date().toISOString()}`;
};

const getProcessLog = (processName) => {
  return `PROCESS: ${processName} executed at ${new Date().toISOString()}`;
};

module.exports = {
  getInfoLog,
  getErrorLog,
  getProcessLog,
};
