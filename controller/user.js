//package imports

//module imports
const User = require("../model/user");
const ErrorResponse = require("../utils/errorResponse");

//custom error strings
const userExistsError = "User already exists";
const emailRequired = "Your email is required";

exports.post = async (req, res, next) => {
	const { email, picture } = req.body

	try {
		if(!email){
			return next(new ErrorResponse(emailRequired, 400))
		}

		const userExist = await User.findOne({ email })

		if(userExist){
			return next(new ErrorResponse(userExistsError, 400))
		}

		const user = await User.create({email, picture})

		res.status(201).json({
			success: true,
			user: user
		})

	} catch (error) {
		next(error)
	}
}