import SignInForm from "./SignInForm";
import SignInPicture from "./SignInPicture";

const SignIn = () => {
  return (
    <section className="h-[calc(100vh-5rem)] sp wrapper grid grid-cols-2 items-center gap-20 mb-20">
      <SignInPicture/>
      <SignInForm/>
    </section>
  );
};

export default SignIn;
