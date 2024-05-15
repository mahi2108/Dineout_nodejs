// const ErrorHandler = require("../utils/ErrorHandler");
// const catchAsyncErrors = require("./catchAsyncErrors");
// const jwt = require("jsonwebtoken");
// const User = require("../models/userModel");
// const Driver = require("../models/driverModel");

// //check if user is authenticated or not
// exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
//   const { token } = req.cookies;
//   if (!token) {
//     return next(new ErrorHandler("Login first to access this resource", 401));
//   }

//   try {
//     const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);

//     req.user = await User.findById(decodedData.id);
//     console.log("====================================");
//     console.log(req.user);
//     console.log("====================================");
//     if (!req.user) {
//       return next(new ErrorHandler("User not found", 404));
//     }
//     next();
//   } catch (err) {
//     return next(new ErrorHandler("Invalid or expired token", 401));
//   }
// });
// //driver
// exports.isAuthenticatedDriver = catchAsyncErrors(async (req, res, next) => {
//   const { token } = req.cookies;
//   if (!token) {
//     return next(new ErrorHandler("Login first to access this resource", 401));
//   }

//   try {
//     const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);
//     console.log(token);
//     console.log(decodedData.id);
//     req.driver = await Driver.findById(decodedData.id);
//     if (!req.driver) {
//       return next(new ErrorHandler("Driver not found", 404));
//     }
//     next();
//   } catch (err) {
//     return next(new ErrorHandler("Invalid or expired token", 401));
//   }
// });

// //admin role
// exports.authorizeRoles = (...roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user.role)) {
//       return next(
//         new ErrorHandler(
//           `Role (${req.user.role}) is not allowed to access this resource`,
//           403
//         )
//       );
//     }
//     next();
//   };
// };

// //Staff
// exports.isAuthenticatedStaff = catchAsyncErrors(async (req, res, next) => {
//   const { token } = req.cookies;
//   if (!token) {
//     return next(new ErrorHandler("Login first to access this resource", 401));
//   }

//   try {
//     const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);

//     req.staff = await Staff.findById(decodedData.id);
//     console.log("====================================");
//     console.log(req.staff);
//     console.log("====================================");
//     if (!req.staff) {
//       return next(new ErrorHandler("User not found", 404));
//     }
//     next();
//   } catch (err) {
//     return next(new ErrorHandler("Invalid or expired token", 401));
//   }
// });
