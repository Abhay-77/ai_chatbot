import Link from "next/link";

const SignUpPage: React.FC = () => {
  return (
    <>
      <section className="flex justify-center bg-gray-100 h-screen items-center">
        <SignupBox />
      </section>
    </>
  );
};

function SignupBox() {
  return (
    <>
      <section className="flex flex-col w-1/3 p-10 gap-8 bg-white">
        <h1 className="text-4xl font-extrabold">SignUp</h1>
        <form action="" className="flex flex-col gap-2">
          Username
          <input
            type="text"
            className="border border-black rounded-md w-full outline-none px-1"
          />
          Password
          <input
            type="text"
            className="border border-black rounded-md w-full outline-none px-1"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white h-8 my-4 hover:bg-blue-400"
          >
            Signup
          </button>
        </form>
        <h2 className="">
          Already have an account?
          <Link href="/login" className="underline hover:text-gray-950">
            Login
          </Link>
        </h2>
      </section>
    </>
  );
}

export default SignUpPage;
