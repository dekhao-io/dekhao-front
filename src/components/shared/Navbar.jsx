import logo from "@/assets/logo.png";
import Image from "next/image";
import { Button } from "antd";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="mx-4">
        <Image src={logo} width={74} height={162} alt="logo" />
      </div>
      <div className="flex space-x-4">
        <Button type="primary" className="rounded  font-bold">
          <Link href="/api/login">Login</Link>
        </Button>
        <Button type="primary" className="rounded  font-bold">
          <Link href="/api/register">Register</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
