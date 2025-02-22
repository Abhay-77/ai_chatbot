import "../globals.css";
import LoginForm from "../ui/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <>
      <section className="flex justify-center bg-gray-100 h-screen items-center">
        <LoginForm />
      </section>
    </>
  );
};

export default LoginPage