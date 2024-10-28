import NextAuth, { NextAuthOptions, RequestInternal } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "../../../models/userModel"; // Adjust path as necessary
import { connectToDatabase } from "../../../lib/utils";
import { hash, compare } from "bcryptjs";

// Define types for credentials object
type Credentials = {
  email: string;
  password: string;
  name?: string;
};

// Define authOptions using NextAuthOptions for better typing
const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        name: { label: "Name", type: "text" }, // Name field for signup
      },
      authorize: async (credentials: Credentials | undefined) => {
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error("Missing email or password");
        }
        
        const { email, password, name } = credentials;

        await connectToDatabase();

        // Check if user exists
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
          // Create a new user if they don't exist
          const hashedPassword = await hash(password, 10); // Hash the password

          const newUser = await User.create({
            email,
            password: hashedPassword,
            name,
          });

          return { id: newUser._id, email: newUser.email, name: newUser.name };
        }

        // If the user exists, compare passwords
        const isMatch = await compare(password, existingUser.password);
        if (!isMatch) {
          throw new Error("Invalid credentials");
        }

        return { id: existingUser._id, email: existingUser.email, name: existingUser.name };
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/auth/error", // Redirect to error page
  },
  callbacks: {
    async signIn({ user, account }: { user: any; account: any }) {
      // Additional logic on sign in, if necessary
      return true;
    },
  },
  debug: true,
};

// Wrap in a function and export as default for Next.js routing
const handler = async (req: RequestInternal, res: any) => await NextAuth(req, res, authOptions);

export { handler as GET, handler as POST };
