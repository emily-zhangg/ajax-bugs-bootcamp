export default function initUsersController(db) {
  const login = (req, res) => {
    res.render("login", {});
  };
  const loggedIn = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    console.log(email, password, "hiii");
    const userDetails = await db.User.findAll({
      where: {
        email,
      },
    });
    console.log(userDetails);
    if (userDetails && userDetails[0].dataValues.password === password) {
      console.log("success!!!!");
      res.cookie("userId", userDetails[0].dataValues.id);
    }
    res.redirect("/");
  };
  return { login, loggedIn };
}
