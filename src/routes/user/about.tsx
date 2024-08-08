import { createFileRoute } from '@tanstack/react-router'
// import useStore from '../../hooks/useStore';

export const Route = createFileRoute('/user/about')({
  component: AboutComponent,
})

function AboutComponent() {
  // const { count, inc } = useStore();

  return (
    <div className="p-2">
      <h3>About</h3>
      <h3>Welcome Home!</h3>
      {/* <span>{count}</span>
      <button onClick={inc}>one up</button> */}
    </div>
  )
}