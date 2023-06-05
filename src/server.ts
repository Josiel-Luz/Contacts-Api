import app from "./app";
import AppDataSource from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Database is conected");
    app.listen(3001, () => {
      console.log("Server is running on 3001");
    });
  })
  .catch((error) => console.log(error));
