import SignUpForm from "./SignUpForm";
import SignUpPicture from "./SignUpPicture";

const SignUp = () => {
  return (
    <section className="sp wrapper grid grid-cols md:grid-cols-2  items-center gap-20 mb-10">
      <SignUpPicture />
      <SignUpForm />
    </section>
  );
};

export default SignUp;
