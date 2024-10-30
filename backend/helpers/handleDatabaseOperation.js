export const handleDatabaseOperation = async (operation) => {
  try {
    await operation;
  } catch (error) {
    console.log(error);
    if (error instanceof Error) throw new Error();
    else
      throw new Error(
        "Non-Error type thrown during database operation:" + error
      );
  }
};
