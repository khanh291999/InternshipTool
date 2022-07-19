const router = require("express").Router();
//const auth = require("../middleware/auth");
const Internresourceneed = require("../models/internresourceneedModel");

// Getting all 
router.get("/", (req, res) => {
  Internresourceneed.find({})
    .then((data) => {
      // console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

// Getting all one 
router.get("/:_id", (req, res) => {
  Internresourceneed.findOne({
    id: req.params.id,
  })
    .then((data) => {
      // console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

//Creating one
router.post("/", (req, res) => {
  const data = req.body;

  const newInternresourceneed = new Internresourceneed(data);
  newInternresourceneed.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server errors" });
    }
    return res.json({
      msg: " Your data has been saved!!!",
    });
  });
});

//Delete one
router.delete("/:_id", async (req, res) => {
  try {
    console.log(req.params.id);
    const removedPost = await Internresourceneed.remove({ id: req.params.id });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//Editting one
router.patch("/:_id", async (req, res) => {
  try {
    const updatePost = await Internresourceneed.updateOne(
      { _id: req.params._id },
      {
        $set: {
          email: req.body.email,
          username: req.body.username,
          password: req.body.password,
          role: req.body.role,
        },
      }
    );
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;