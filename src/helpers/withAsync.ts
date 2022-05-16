export const withAsync = async (fn: any, ...args: any[]) => {
  try {
    const response = await fn(...args);
    return {
      response,
      error: null,
    };
  } catch (error) {
    return {
      response: null,
      error,
    };
  }
};
