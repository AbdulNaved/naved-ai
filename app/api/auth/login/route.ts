import { NextResponse } from 'next/server';
import { connectToDatabase } from "@/app/lib/utils";
import { User } from "@/app/models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
    }

    await connectToDatabase();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET as string,
      { expiresIn: '1h' }
    );

    return NextResponse.json({ message: "Login successful", token }, { status: 200 });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}





// import { NextResponse } from 'next/server'; // For Next.js App Router responses
// import { connectToDatabase } from "@/app/lib/utils"; // Ensure proper DB connection utility
// import { User } from "@/app/models/userModel"; // Your user model schema
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken"; // For generating JWT tokens (if needed)

// export async function POST(req: Request) {
//   try {
//     // Parse request body
//     const { email, password } = await req.json();

//     // Validate input
//     if (!email || !password) {
//       return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
//     }

//     // Connect to the database
//     await connectToDatabase();

//     // Check if the user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
//     }

//     // Validate password
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
//     }

//     // Generate JWT token (or handle session creation if you prefer sessions)
//     const token = jwt.sign(
//       { userId: user._id, email: user.email }, 
//       process.env.JWT_SECRET as string, // Ensure the secret is in your environment variables
//       { expiresIn: '1h' } // Token expires in 1 hour
//     );

//     // Send the token back (or use cookies/sessions as required)
//     return NextResponse.json({ message: "Login successful", token }, { status: 200 });

//   } catch (error) {
//     console.error("Login error:", error); // Log the error for debugging
//     return NextResponse.json({ message: "Internal server error" }, { status: 500 });
//   }
// }




// corect
// import { NextResponse } from 'next/server'; // Use NextResponse for new App Router
// import { connectToDatabase } from "@/app/lib/utils";
// import { User } from "@/app/models/userModel";
// import bcrypt from "bcryptjs";

// // POST request handler
// export async function POST(req: Request) {
//   try {
//     const { email, password } = await req.json(); // Use req.json() to parse the body in App Router

//     if (!email || !password) {
//       return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
//     }

//     await connectToDatabase();

//     const user = await User.findOne({ email });
//     if (!user) {
//       return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
//     }

//     // Generate JWT token or session (not implemented here)
//     return NextResponse.json({ message: "Login successful" }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ message: "Internal server error" }, { status: 500 });
//   }
// }

// You can add other HTTP methods as needed (e.g., DELETE, PUT, GET)
// For example, you can specify another method handler like this:
// export async function GET(req: Request) {
//   // Handle GET requests here
// }
