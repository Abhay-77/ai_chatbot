'use client'

import Link from "next/link";
import { useActionState } from "react";
import { addUser } from "../lib/actions";

function SignupBox() {
    const [errorMessage,formAction,isPending] = useActionState(addUser,{message:"",errors:{}})
  return (
    <>
      <section className="flex flex-col w-80 sm:w-1/3 p-10 gap-8 bg-white">
        <h1 className="text-4xl font-extrabold">Sign Up</h1>
        <form action={formAction} className="flex flex-col gap-4">
          <label htmlFor="username">
            Username
            <input
              type="text"
              className="border border-black rounded-md w-full outline-none px-1"
              name="username"
              aria-describedby="username-error"
              id="username"
            />
            <div id="username-error" className="text-red-500 text-sm">
              {errorMessage?.errors?.username?.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          </label>
          <label htmlFor="email">
            Email
            <input
              type="text"
              className="border border-black rounded-md w-full outline-none px-1"
              name="email"
              aria-describedby="email-error"
              id="email"
            />
            <div id="email-error" className="text-red-500 text-sm">
              {errorMessage?.errors?.email?.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              className="border border-black rounded-md w-full outline-none px-1"
              name="password"
              aria-describedby="password-error"
              id="password"
            />
            <div id="password-error" className="text-red-500 text-sm">
              {errorMessage?.errors?.password?.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white h-8 my-4 hover:bg-blue-400"
            disabled={isPending}
            aria-disabled={isPending}
          >
            Signup
          </button>
          {errorMessage?.message && (
            <>
              <p className="text-red-500">{errorMessage.message}</p>
            </>
          )}
        </form>

        <h2 className="">
          Already have an account?
          <Link href="/login" className="underline hover:text-gray-700">
            Login
          </Link>
        </h2>
      </section>
    </>
  );
}
export default SignupBox