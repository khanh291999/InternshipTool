const router = require("express").Router();
//const auth = require("../middleware/auth");
const User = require("../models/userModel");

// Getting all user
router.get("/", (req, res) => {
  User.find({})
    .then((data) => {
      // console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

// Getting all one user
router.get("/:_id", (req, res) => {
  User.findOne({
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

//Creating one user
router.post("/", (req, res) => {
  const data = req.body;

  const newUser = new User(data);
  newUser.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server errors" });
    }
    return res.json({
      msg: " Your data has been saved!!!",
    });
  });
});

//Delete one user
router.delete("/:_id", async (req, res) => {
  try {
    console.log(req.params.id);
    const removedPost = await User.remove({ id: req.params.id });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//Editting one user
router.patch("/:_id", async (req, res) => {
  try {
    const updatePost = await User.updateOne(
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

// //register
// router.post("/register", async (req, res) => {
//   try {
//     let { email, password, passwordCheck, displayName, address, phoneNumber } =
//       req.body;

//     // validate

//     if (!email || !password || !passwordCheck || !address || !phoneNumber)
//       return res.status(400).json({ msg: "Not all fields have been entered." });
//     if (password.length < 5)
//       return res
//         .status(400)
//         .json({ msg: "The password needs to be at least 5 characters long." });
//     if (password !== passwordCheck)
//       return res
//         .status(400)
//         .json({ msg: "Enter the same password twice for verification." });

//     const existingUser = await User.findOne({ email: email });
//     if (existingUser)
//       return res
//         .status(400)
//         .json({ msg: "An account with this email already exists." });

//     if (!displayName) displayName = email;

//     const salt = await bcrypt.genSalt();
//     const passwordHash = await bcrypt.hash(password, salt);

//     const newUser = new User({
//       email,
//       password: passwordHash,
//       displayName,
//       address,
//       phoneNumber,
//     });
//     const savedUser = await newUser.save();
//     res.json(savedUser);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });



// //login
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // validate
//     if (!email || !password)
//       return res.status(400).json({ msg: "Not all fields have been entered." });

//     const user = await User.findOne({ email: email });
//     if (!user)
//       return res
//         .status(400)
//         .json({ msg: "No account with this email has been registered." });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

//     const JWT_SECRET = '*e>xn8f?994tn>gen5gQL;Nt"pdpjDVM5Q8[7"3a@_T}<69z[K';
//     const token = jwt.sign({ id: user._id }, JWT_SECRET);
//     res.json({
//       token,
//       user: {
//         id: user._id,
//         email: user.email,
//         username: user.username,
//         role: user.role,
//       },
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: err.message });
//   }
// });

// router.post("/adduser", async (req, res) => {
//   try {
//     let { email, password, passwordCheck, displayName, address, phoneNumber } =
//       req.body;
//     console.log("req.body", req.body);

//     //validate
//     if (
//       !email ||
//       !password ||
//       !passwordCheck ||
//       !displayName ||
//       !address ||
//       !phoneNumber
//     )
//       return res.status(400).json({ msg: "Not all fields have been entered." });
//     if (password.length < 5)
//       return res
//         .status(400)
//         .json({ msg: "The password needs to be at least 5 characters long." });
//     if (password !== passwordCheck)
//       return res
//         .status(400)
//         .json({ msg: "Enter the same password twice for verification." });
//     const existingUser = await User.findOne({ email: email });
//     if (existingUser)
//       return res
//         .status(400)
//         .json({ msg: "An account with this email already exists." });
//     if (!displayName) displayName = email;

//     const salt = await bcrypt.genSalt();
//     const passwordHash = await bcrypt.hash(password, salt);

//     const newUser = new User({
//       email,
//       password: passwordHash,
//       displayName,
//       address,
//       phoneNumber,
//     });
//     const savedUser = await newUser.save();
//     res.json(savedUser);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// router.delete("/delete", auth, async (req, res) => {
//   try {
//     const deletedUser = await User.findByIdAndDelete(req.user);
//     res.json(deletedUser);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// router.patch("/updateuser/:id", async (req, res) => {
//   try {
//     let { email, password, passwordCheck, displayName, address, phoneNumber } =
//       req.body;
//     console.log("req.body", req.body);

//     //validate
//     if (
//       !email ||
//       !password ||
//       !passwordCheck ||
//       !displayName ||
//       !address ||
//       !phoneNumber
//     )
//       return res.status(400).json({ msg: "Not all fields have been entered." });
//     if (password.length < 5)
//       return res
//         .status(400)
//         .json({ msg: "The password needs to be at least 5 characters long." });
//     if (password !== passwordCheck)
//       return res
//         .status(400)
//         .json({ msg: "Enter the same password twice for verification." });
//     const existingUser = await User.findOne({ email: email });

//     const existingUser1 = await User.findOne(
//       { id: req.params.id },
//       { email: email }
//     );
//     if (existingUser1 == existingUser) {
//       return res
//         .status(400)
//         .json({ msg: "An account with this email already exists." });
//     }
//     if (!displayName) displayName = email;

//     const salt = await bcrypt.genSalt();
//     const passwordHash = await bcrypt.hash(password, salt);

//     const updateUser = await User.updateOne(
//       { id: req.params.id },
//       {
//         $set: {
//           email: email,
//           password: passwordHash,
//           displayName: displayName,
//           address: address,
//           phoneNumber: phoneNumber,
//         },
//       }
//       // email,
//       // password: passwordHash,
//       // displayName,
//       // type,
//     );
//     res.json(updateUser);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// router.post("/tokenIsValid", async (req, res) => {
//   try {
//     const token = req.header("x-auth-token");
//     if (!token) return res.json(false);

//     const verified = jwt.verify(token, process.env.JWT_SECRET);
//     if (!verified) return res.json(false);

//     const user = await User.findById(verified.id);
//     if (!user) return res.json(false);

//     return res.json(true);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// router.get("/", auth, async (req, res) => {
//   const user = await User.findById(req.user);
//   res.json({
//     displayName: user.displayName,
//     id: user._id,
//   });
// });

