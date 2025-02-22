"use client";

import Link from "next/link";
import { useActionState } from "react";
import { authenticate } from "../lib/actions";
import { State } from "../lib/definitions";

function LoginForm() {
  const initialState:State = {
    message: "",
    errors: {},
  };
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    initialState
  );
  return (
    <>
      <section className="flex flex-col w-1/3 p-10 gap-8 bg-white">
        <h1 className="text-4xl font-extrabold">Login</h1>
        <form action={formAction} className="flex flex-col gap-4">
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
              type="text"
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
            Login
          </button>
          {errorMessage?.message && (
            <>
              <p className="text-red-500">{errorMessage.message}</p>
            </>
          )}
        </form>

        <h2 className="">
          {"Don't have an account?"}
          <Link href="/signup" className="underline hover:text-gray-700">
            Sign up
          </Link>
        </h2>
      </section>
    </>
  );
}
export default LoginForm;
