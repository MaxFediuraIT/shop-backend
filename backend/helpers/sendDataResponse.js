export const sendDataResponse = (res, code, data, message) => {
  try {
    res.status(code).json(data);
    console.log(message);
  } catch (error) {
    console.log(error);
  }
};
