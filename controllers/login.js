// Importing User modal
const User = require("../models/users");

// Handling the login route
exports.postLogin = async (req, res, next) => {
  // Parsing the user data from form
  const userEmail = req.body.email;
  const password = req.body.password;

  // Validate the input if user email exists
  try {
    const user = await User.findOne({ email: userEmail });

    // Checking if the email exists
    if (!user) {
      res
        .status(201)
        .json({
          msg:
            "The email does'nt exist, Please Create an account if you are new here.",
        });
      return;
    } else {
      // check the user password
      if (password !== user.password) {
        res.status(201).json({ msg: "Wrong Password, Please try again", email: userEmail });
        return;
      }

      // Sending response if everything goes OK
      res.status(200).json(user);
    }
  } catch (err) {
    // return an error if anything goes wrong
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

exports.postSignup = async (req, res, next) => {
  const userName = req.body.name;
  const userEmail = req.body.email;
  const userPassword = req.body.password;

  // Validate the user input if all the inputs follows required specification
  // Use Validate Login Function
  //
  //    To be done once we complete validation at frontend
  //

  // Check For email duplicaition
  try {
    const existingUser = await User.findOne({ email: userEmail });
    // If email allready exists
    if (existingUser) {
      res.json({
        msg: "The email is allready used please try a different one",
        usedEmail: userEmail,
      });
      return;
    }
  } catch (err) {
    res.status(400).json({ msg: err.message });
    console.log("email checking error");
  }

  const newUser = {
    name: userName,
    email: userEmail,
    password: userPassword,
    phone: "",
    bio: "",
    imageUrl: "",
    following: [],
    followers: [],
  };

  // Create the user in the database
  const user = new User(newUser);

  try {
    // Saving the user to database
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    // console.log(err)
    console.log("creating user error");
    res.status(400).json({ message: err.message });
  }
};

// Function to valudate userdata while SIGNUP
// retutns true if  all the parameters passes the test
// else return the string that is invalid
// function validateLogin() {}
