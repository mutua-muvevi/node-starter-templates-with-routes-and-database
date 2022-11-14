//package imports

//module imports
const User = require("../model/user");
const ErrorResponse = require("../utils/errorResponse");

//custom post error strings
const userExistsError = "User already exists";
const emailRequired = "Your email is required";

//post controller
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

//custom edit error strings]
const noUserError = "No user"

//edit by id controller
exports.edit = (req, res, next) => {
	const id = req.params.id
	const { email, picture } = req.body

	try {
		User.findByIdAndUpdate(
			id,
			{ email, picture },
			{ new: true },
			(error, user) => {
				if(!user){
					return next(new ErrorResponse(noUserError, 404))
				}

				if(error){
					return next(new ErrorResponse(error, 500))
				}

				res.status(200).json({
					success: true,
					data: user
				})
			}
		)
	} catch (error) {
		next(error)
	}
}