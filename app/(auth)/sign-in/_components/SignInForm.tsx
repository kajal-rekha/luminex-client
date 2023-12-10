import Button from "@/components/ui/Button";
import Link from "next/link";

const SignInForm = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-1.5">
        <h2>Welcome back!</h2>
        <p className="text-black/50">Please login to your account</p>
      </div>
      <form className="flex w-full flex-col gap-5 text-lg">
        <div className="flex flex-col items-start gap-1.5">
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            id="email"
            placeholder="hello@example.com"
            className="eq w-full rounded-xl border border-gray bg-transparent px-3 py-5 outline-none focus:border-orange"
          />
        </div>
        <div className="flex flex-col items-start gap-1.5">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Write your password"
            className="eq w-full rounded-xl border border-gray bg-transparent px-3 py-5 outline-none focus:border-orange"
          />
        </div>
        <Button variant="orange" type="submit">
          Login
        </Button>
        <p>
          <span className="text-black/50">Do not have an account?</span>
          <Link href="/sign-up" className="link-item">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;
