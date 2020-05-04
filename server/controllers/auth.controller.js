const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const keys = require('../keys');

module.exports.login = async (req, res) => {
  const candidate = await User.findOne({ login: req.body.login });

  if (candidate) {
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      candidate.password
    );
    if (isPasswordCorrect) {
      const token = jwt.sign(
        {
          login: candidate.login,
          userId: candidate._id,
        },
        keys.JWT,
        { expiresIn: 60 * 60 }
      );
      res.status(200).json({ token });
    } else {
      res.status(404).json({ message: 'Пользователь не найден' });
    }
  } else {
    res.status(404).json({ message: 'Пользователь не найден' });
  }
};

module.exports.createUser = (req, res) => {};
