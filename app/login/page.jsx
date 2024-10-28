"use client"; // Indicates this is client-side code

import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"; // Only import once
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation"; // useRouter for client-side navigation
import { LoginForm } from "@/components/client/form";
import { signIn } from "next-auth/react"; // Fixed import

const Page = () => {
  const router = useRouter(); // For client-side navigation

  const handleGoogleSignIn = async () => {
    try {
      await signIn("google"); // Trigger Google sign-in
      router.push("/"); // Redirect on success
    } catch (error) {
      console.error("Google Sign-in failed", error);
    }
  };

  return (
    <div className="text-white flex justify-center items-center h-dvh">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-center items-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm /> {/* Your login form component */}
        </CardContent>
        <CardFooter className=" text-white flex flex-col gap-4">
          <span>Or</span>
          <Button variant="outline" onClick={handleGoogleSignIn}>
            Login With Google
          </Button>
          <Link href="/signup" className="mt-2">
            Dont have an account? Signup
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;


// "use client"; // Indicates this is client-side code
// import React, { useState } from "react";
// import { Button } from "@/components/ui/button"; // Adjust import paths
// import { Input } from "@/components/ui/input"; // Adjust import paths
// import { toast } from "react-toastify"; // Make sure you have toast set up correctly
// import { credentialsLogin } from "@/app/api/actions/login"; // Correct import
// import { useRouter } from "next/navigation"; // Import useRouter for redirection

// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter(); // Initialize the router

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form submission
//     const toastId = toast.loading("Logging in...");

//     try {
//       const { success } = await credentialsLogin(email, password); // Call the login function
      
//       if (success) {
//         toast.success("Login Successful", { id: toastId });
//         router.push("/signup"); // Redirect to the signup page
//       }
//     } catch (error) {
//       toast.error(error.message, { id: toastId }); // Show error message
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//       <Input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <Input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <Button type="submit">Login</Button>
//     </form>
//   );
// };

// export default LoginForm;


// "use client"; // Indicates this is client-side code

// import React from "react";
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { useRouter } from "next/navigation"; // useRouter for client-side navigation
// import { LoginForm } from "@/components/client/form";
// import { signIn } from "next-auth/react"; // Fixed import
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import Link from "next/link";
// const Page = () => {
//   const router = useRouter(); // For client-side navigation

//   const handleGoogleSignIn = async () => {
//     try {
//       await signIn("google"); // Trigger Google sign-in
//       router.push("/"); // Redirect on success
//     } catch (error) {
//       console.error("Google Sign-in failed", error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-dvh">
//       <Card>
//         <CardHeader>
//           <CardTitle>Login</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <LoginForm /> {/* Your login form component */}
//         </CardContent>
//         <CardFooter className="flex flex-col gap-4">
//           <span>Or</span>
//           <Button variant="outline" onClick={handleGoogleSignIn}>
//             Login With Google
//           </Button>
//           <Link href="/signup" className="mt-2">
//             Don't have an account? Signup
//           </Link>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// };

// export default Page;



// //"use client";

// import React from "react";
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { redirect } from "next/navigation";
// import { signIn, getSession } from "next-auth/react";
// import { LoginForm } from "@/components/client/form";
// import { useRouter } from "next/navigation";

// const Page = async () => {
//   const session = await getSession();
//   const router = useRouter();

//   // Redirect to homepage if user is already authenticated
//   if (session?.user) {
//     router.push("/");
//   }

//   return (
//     <div className="flex justify-center items-center h-dvh">
//       <Card>
//         <CardHeader>
//           <CardTitle>Login</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <LoginForm />
//         </CardContent>
//         <CardFooter className="flex flex-col gap-4">
//           <span>Or</span>
//           <Button
//             variant="outline"
//             onClick={async () => {
//               await signIn("google");
//             }}
//           >
//             Login With Google
//           </Button>
//           <Link href="/signup" className="mt-2">
//             Don't have an account? Signup
//           </Link>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// };

// export default Page;



// import React from "react";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import Link from "next/link";
// import { redirect } from "next/dist/server/api-utils";
// import signIn, { auth } from '../auth';
// import { toast } from "sonner";
// import { LoginForm } from "@/components/client/form";

// const page = async () => {
//   const session = await auth();
//   if(session?.user) redirect("/");
//   return (
//     <div className="flex justify-center items-center h-dvh">
//       <Card>
//         <CardHeader>
//           <CardTitle>Login</CardTitle>
          
//         </CardHeader>
//         <CardContent >
//           <LoginForm/>
  
//         </CardContent>
//         <CardFooter className="flex flex-col gap-4 ">
//           <span>Or</span>
//           <form action={async () => {
//             "use server";
//             await signIn("google");
//           }}>
//              <button type="submit" variant={"outline"}>
//                Login With Google
//               </button>
//           </form>

//           <Link href="/signup " className="mt-2">
//             Don`y have an account? Signup
//           </Link>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }

// export default page;

// "use client";

// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import toast from 'react-hot-toast'
// import { Toast } from 'react-hot-toast'
// import { useRouter } from 'next/navigation'
// import Link from 'next/link';

// export default function Loginpage() {
//    const router = useRouter()

//    const [user, setUser] = useState({
//      email: "",
//      password: "",
//      username: ""
//    })

//    const [buttonDisabled, setButtonDisabled] = useState(false)
//    const [loading, setLoading] = useState(false)

//    const onLogin = async () => {

//       try {
//         setLoading(true)
//         const response = await axios.post("/api/users/login", user)
//         console.log("login success", response.data);
//         router.push('http://localhost:3000/')

//       } catch (error: any) {
//         console.log("Signup Failed");
//         toast.error(error.message)
//       }
//    }

//    useEffect(() => {
//       if (user.email.length > 0 &&  user.password.length > 0 && user.username.length > 0) {
//          setButtonDisabled(false)
//         }else {
//             setButtonDisabled(true)
//         }
//    },[user])

//   return (
//     <div className='flex flex-col items-center justify-center min-h-screen py-2 '>
//     <h1>{loading ? "Processing" : "Signup"}</h1>
//     <hr />

//     <input type="text"
//       className='p-2 border border-gray-300 rounded-xl mb-4 focus:outline-none focus:border-gray-600 text-black'
//       id='Email'
//       value={user.email}
//       onChange={(e) => setUser({...user, email: e.target.value})}
//       placeholder='Email'

//     />
//     <input type="password"
//       className='p-2 border border-gray-300 rounded-xl mb-4 focus:outline-none focus:border-gray-600 text-black'
//       id='Password'
//       value={user.password}
//       onChange={(e) => setUser({...user, password: e.target.value})}
//       placeholder='Password'

//     />
//     <button className='p-2 border border-gray-300 rounded-lg mb-4  focus:outline-none focus:border-gray-600' onClick={onLogin}>
//         {buttonDisabled ? "No Login" : "Login"}
//     </button>
//     <Link href="/signup">Viste to Signup</Link>

//     </div>

//   )
// }
