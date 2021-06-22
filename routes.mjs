import db from "./models/index.mjs";

// import your controllers here
import initBugsController from "./controllers/bugs.mjs";
import initUsersController from "./controllers/users.mjs";
export default function bindRoutes(app) {
  // initialize the controller functions here
  // pass in the db for all callbacks
  const BugsController = initBugsController(db);
  const UsersController = initUsersController(db);
  // define your route matchers here using app
  app.get("/", BugsController.index);
  app.get("/createForm", BugsController.createForm);
  app.post("/create", BugsController.create);
  app.get("/login", UsersController.login);
  app.post("/login", UsersController.loggedIn);
}
