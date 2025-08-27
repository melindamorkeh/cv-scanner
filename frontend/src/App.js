import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Button>Click me!</Button>
    </div>
  );
}

export function ButtonDestructive() {
  return <Button variant="destructive">Destructive</Button>
}

export default ButtonDestructive;