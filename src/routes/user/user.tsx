import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user/user')({
  component: UserComponent,
})

function UserComponent() {
  return (
    <div className="p-2">
      <h3>User</h3>
    </div>
  )

}