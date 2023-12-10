"use client";

import Button from "@/components/ui/Button";
import { axiosPost } from "@/lib/axiosPost";

import Link from "next/link";
import React, { useCallback, useState } from "react";
import toast from "react-hot-toast";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  image: string;
}
const SignUpForm = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    name: "",
    email: "",
    password: "",
    image: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = useCallback(
    async (e: React.SyntheticEvent) => {
      e.preventDefault();
      setIsLoading(true);

      const data = await axiosPost("/api/users/auth/register", formData);

      if (data) {
        setIsLoading(false);
        setFormData({
          name: "",
          email: "",
          password: "",
          image: "",
        });

        toast.success("Register successfull!");
      } else {
        setIsLoading(false);
      }
    },
    [formData]
  );
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-1.5">
        <h2>Create an account!</h2>
        <p className="text-black/50">Please provide your details to register</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-5 text-lg"
      >
        <div className="flex flex-col items-start gap-1.5">
          <label htmlFor="email">Name</label>
          <input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            type="text"
            id="name"
            placeholder="sarah paraker"
            className="eq w-full rounded-xl border border-gray bg-transparent px-3 py-5 outline-none focus:border-orange"
          />
        </div>

        <div className="flex flex-col items-start gap-1.5">
          <label htmlFor="email">Email address</label>
          <input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type="text"
            id="email"
            placeholder="hello@example.com"
            className="eq w-full rounded-xl border border-gray bg-transparent px-3 py-5 outline-none focus:border-orange"
          />
        </div>
        <div className="flex flex-col items-start gap-1.5">
          <label htmlFor="password">Password</label>
          <input
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            type="password"
            id="password"
            placeholder="Write your password"
            className="eq w-full rounded-xl border border-gray bg-transparent px-3 py-5 outline-none focus:border-orange"
          />
        </div>

        <div className="flex flex-col items-start gap-1.5">
          <label htmlFor="password">Image</label>
          <input
            value={formData.image}
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.value })
            }
            type="text"
            id="image"
            placeholder="Past your image url from pexels/unsplash/cloudinary"
            className="eq w-full rounded-xl border border-gray bg-transparent px-3 py-5 outline-none focus:border-orange"
          />
        </div>
        <Button variant="orange" type="submit" isLoading={isLoading}>
          Register
        </Button>
        <p>
          <span className="text-black/50">Allready have an account?</span>
          <Link href="/sign-in" className="link-item">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
