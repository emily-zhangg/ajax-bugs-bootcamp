export default function initBugsController(db) {
  const index = (req, res) => {
    res.render("root", {});
  };
  const createForm = async (req, res) => {
    const features = await db.Feature.findAll();
    res.send(features);
  };
  const create = async (req, res) => {
    console.log(req.body, req.cookies.userId);
    await db.Bug.create({
      problem: req.body[0],
      errorText: req.body[1],
      commit: req.body[2],
      featureId: req.body[3],
      userId: req.cookies.userId,
    });
    res.send("ok");
  };
  return { index, createForm, create };
}
