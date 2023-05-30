import app from "./app";
import AppDataSource from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Database is conected");
    app.listen(3000, () => {
      console.log("Server is running on 3000");
    });
  })
  .catch((error) => console.log(error));
