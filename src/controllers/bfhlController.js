const { isNumber, isAlphabet, buildConcatString } = require("../utils/helpers");

exports.processData = (req, res, next) => {
  try {
    const data = req.body.data || [];

    let odd = [], even = [], alpha = [], special = [], sum = 0, letters = [];

    for (let item of data) {
      if (isNumber(item)) {
        const num = parseInt(item);
        sum += num;
        (num % 2 === 0 ? even : odd).push(item);
      } else if (isAlphabet(item)) {
        alpha.push(item.toUpperCase());
        letters.push(item);
      } else {
        special.push(item);
      }
    }

    res.status(200).json({
      is_success: true,
      user_id: `${process.env.FULL_NAME}_${process.env.DOB}`,
      email: process.env.EMAIL,
      roll_number: process.env.ROLL,
      odd_numbers: odd,
      even_numbers: even,
      alphabets: alpha,
      special_characters: special,
      sum: sum.toString(),
      concat_string: buildConcatString(letters),
    });
  } catch (error) {
    next(error);
  }
};
