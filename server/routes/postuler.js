const express = require("express");
const router = express.Router();


router.post("/", (req, res) => {
    const newPost = new Post({ ...req.body });
    newPost
      .save()
      .then((postuler) => res.status(200).json(postuler))
      .catch((err) => res.send(err));
  });

router.get("/", (req, res) => {
  // let id = req.params._id
  let { _id } = req.params;
  postuler.find({ _id })
    .then((postuler) => res.send(postuler))
    .catch((err) => res.send(err));
});
module.exports = router;