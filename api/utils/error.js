export const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  err.message = message;
  return error;
};
