import { Link } from "@tanstack/react-router"

const Navbar = () => {
  return (
    <div className="z-50 flex h-screen w-40 shrink-0 flex-col gap-4 bg-primary pl-10 pt-10 text-lg font-light text-white drop-shadow-xl">
      <Link
        to="/"
        activeProps={{
          className: "font-bold",
        }}
        activeOptions={{ exact: true }}
      >
        登出
      </Link>
      <Link
        to={"/user/input"}
        activeProps={{
          className: "font-bold",
        }}
      >
        Input
      </Link>
      <Link
        to={"/user/user"}
        activeProps={{
          className: "font-bold",
        }}
      >
        User
      </Link>
    </div>
  );
}

export default Navbar