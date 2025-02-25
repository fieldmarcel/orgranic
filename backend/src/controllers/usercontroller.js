import { User } from "../models/usermodel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {
  try {
    const { userName, email, password, fullName } = req.body;

    console.log("request body ", req.body);

    if (!fullName) {
      return res
        .status(400)
        .json({ success: false, message: "Full name is required" });
    }
    if (!userName) {
      return res
        .status(400)
        .json({ success: false, message: "user name is required" });
    }
    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "email is required" });
    }
    if (!password) {
      return res
        .status(400)
        .json({ success: false, message: "Password is required" });
    }

    const existedUser = await User.findOne({
      $or: [{ userName }, { email }],
    });

    if (existedUser) {
      return res
        .status(409)
        .json({ success: false, message: "userName / email already exist" });
    }
    console.log(existedUser);

    // Hash the password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullName,
      userName,
      email,
      password: hashedPassword,
    });
    console.log(user);

    const createdUser = await User.findById(user._id).select(
      "-password -refreshtoken"
    );
    // const createdUser = user.toObject();
    // delete createdUser.password; // Remove sensitive data

    if (!createdUser) {
      return res.status(500).json({
        success: false,
        message: "something went wrong while registration of user",
      });
    }
    console.log("isisisiis", createdUser);

    return res
      .status(201)
      .json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error("theres a problem during registration ", error.message);
    return res.status(500).json({
      success: false,
      message: "something went wrong while registration of user",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    console.log("request body", req.body);

    if ((!email ) || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and Password are required",
      });
    }

    const verifiedUser = await User.findOne({ email });
    console.log("Verified User:", verifiedUser);

    if (!verifiedUser) {
      return res
        .status(404)
        .json({ success: false, message: "user not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      verifiedUser.password
    );
    if (!isPasswordCorrect) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid password" });
    }
//generating access and refresh token 
    const accessToken = jwt.sign(
      { userId: verifiedUser._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
    const refreshToken = jwt.sign(
      { userId: verifiedUser._id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );
    const options = {
        refreshToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",  // Ensure data transfer over HTTPS
      sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax", // Protect against CSRF
      maxAge: 7 * 24 * 60 * 60 * 1000,
    };

    const { password: removedPassword, ...userWithoutPassword } =
      verifiedUser.toObject();

    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: {
        id: userWithoutPassword._id,
        userName: userWithoutPassword.userName, 
        email: userWithoutPassword.email,
        fullName: userWithoutPassword.fullName,
      },
      accessToken,
    //   refreshToken,  it should not be provided in response ..only to https cookie
    });

    // Uncomment if you want to use cookies
    // res.cookie("refreshToken", refreshToken, options);
    // res.cookie("accessToken", accessToken, options);
  } catch (error) {
    console.error("theres a problem during login ", error.message);
    return res.status(500).json({
      success: false,
      message: "something went wrong while logging in",
    });
  }
};

const logoutUser= async (req,res)=>{
    try {
        
        res.cookie("refreshToken", "",{
httpOnly: true,
secure: process.env.NODE_ENV === "production",  // Ensure data transfer over HTTPS
      sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
expiresIn: new Date(0)

        } );

        return res.status(200).json({
          success: true,
          message: "User logged out successfully",
        });

    } catch (error) {
      console.error("Error during logout:", error.message);
      return res.status(500).json({
        success: false,
        message: "Something went wrong during logout",
      });
    }
}
const getUserDetails = async (req, res) => {
  try {
    const { userName } = req.params;
    console.log("userName from URL:", userName); // Debugging line
    // Find the user by userName
    const user = await User.findOne({ userName }).select("-password -refreshToken -accessToken");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Get the count of followers
    // const followersCount = await UserRelationship.countDocuments({ following: user._id });

    // // Get the count of following
    // const followingCount = await UserRelationship.countDocuments({ follower: user._id });

    // Return the user details with counts
    res.status(200).json({
      success: true,
      user: {
        userName: user.userName,
        fullName: user.fullName,
        bio: user.bio,
      
        
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

const followUser = async (req, res) => {
  const { userName } = req.params; // Use userName from URL params
  const followerUserName = req.user.userName; // Use userName from the authenticated user

  if (userName === followerUserName) {
    return res.status(400).json({ message: "You cannot follow yourself" });
  }

  try {
    const userToFollow = await User.findOne({ userName }); // Find user by userName
    const follower = await User.findOne({ userName: followerUserName }); // Find follower by userName

    if (!userToFollow || !follower) {
      return res.status(404).json({ message: "User not found" });
    }

    const isFollowing = follower.following.includes(userToFollow._id);

    if (isFollowing) {
      follower.following = follower.following.filter(
        (id) => id.toString() !== userToFollow._id.toString()
      );
      userToFollow.followers = userToFollow.followers.filter(
        (id) => id.toString() !== follower._id.toString()
      );
    } else {
      follower.following.push(userToFollow._id);
      userToFollow.followers.push(follower._id);
    }

    await follower.save();
    await userToFollow.save();

    return res.status(200).json({
      success: true,
      message: isFollowing ? "Unfollowed successfully" : "Followed successfully",
      followersCount: userToFollow.followers.length, // Return updated followers count
    });
  } catch (error) {
    console.error("Error during follow:", error.message);
    return res.status(500).json({
      success: false,
      message: "Something went wrong during follow",
    });
  }
};


export { registerUser, loginUser ,logoutUser,getUserDetails,followUser};
