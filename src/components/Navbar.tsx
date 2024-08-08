import { Link } from "@tanstack/react-router"

const Navbar = () => {
  return (
    <div className="p-2 flex gap-2 bg-gray-300 text-lg">
      <Link
        to="/"
        activeProps={{
          className: 'font-bold',
        }}
        activeOptions={{ exact: true }}
      >
        Home
      </Link>
      <Link
        to={'/user/about'}
        activeProps={{
          className: 'font-bold',
        }}
      >
        About
      </Link>
      <Link
        to={'/user/user'}
        activeProps={{
          className: 'font-bold',
        }}
      >
        User
      </Link>
    </div>
  )
}

export default Navbar