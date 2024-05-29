import { Button } from "@nextui-org/react";
import { FaRegSmile } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <h1>test</h1>
      <Button color="primary" variant="bordered" startContent={<FaRegSmile />}>
        Click me!
      </Button>
    </div>
  );
}
