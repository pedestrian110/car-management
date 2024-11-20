import User from "../modals/authModal.js";

export async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).send("Fill all the details");
  }
  try {
    const user = await User.findOne({ email });
    if (!user || user?.password != password) {
      return res.status(401).send("Not authorize");
    }
    return res.status(200).json({
      id: user._id,
      userName: user.userName,
    });
  } catch (err) {
    return res.status(500).send("Internal Server error");
  }
}

export async function register(req, res) {
  const { userName, email, password } = req.body;
  if (!userName || !email || !password) {
    return res.status(401);
  }

  try {
    const user = await User.create({
      userName,
      email,
      password,
    });
    if (!user) {
      return res.status(400);
    }
    return res.status(200).json({
      id: user._id,
      userName: user.userName,
    });
  } catch (err) {
    return res.status(500).send("Internal Server error");
  }
}
