import logo from "@/assets/logo.png";
import Image from "next/image";
import { Button } from "antd";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="mx-4">
        <Image src={logo} width={74} height={162} alt="logo" />
      </div>
      <div className="flex space-x-4">
        <Button type="primary" className="rounded text-lg font-bold">
          Login
        </Button>
        <Button type="primary" className="rounded text-lg font-bold">
          Register
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
