"use client";

import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import React from "react";

const LoginForm = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      return toast.error("Please provide all fields");
    }

    const toastId = toast.loading("Logging in...");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Login Successful", { id: toastId });
        router.push("/"); // Redirect to homepage after successful login
      } else {
        toast.error(data.message || "Login failed", { id: toastId });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred. Please try again later.", { id: toastId });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-white flex flex-col gap-4">
      <Input type="email" placeholder="Email" name="email" className="text-white" required />
      <Input type="password" className="text-white" placeholder="Password" name="password" required />
      <Button type="submit" className="text-black py-2 px-3 rounded-xl bg-gray-200">Login</Button>
    </form>
  );
};

export { LoginForm };
