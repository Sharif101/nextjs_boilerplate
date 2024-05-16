import { Home } from "@/src";

export default function Root() {
  const a = "hello";
  return (
    <div>
      <Home a={a} />
    </div>
  );
}
