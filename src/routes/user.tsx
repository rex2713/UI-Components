import { Outlet, createFileRoute, redirect } from '@tanstack/react-router'
import Navbar from '../components/Navbar'

export const Route = createFileRoute('/user')({
  //路由守衛（身份驗證）
  beforeLoad: async ({ location }) => {
    if (!localStorage.getItem('token')) {
      throw redirect({
        to: '/',
        search: {
          redirect: location.href,
        }
      })
    }
  },
  component: () => <div>
    <Navbar />
    <hr />
    <Outlet />
  </div>
})