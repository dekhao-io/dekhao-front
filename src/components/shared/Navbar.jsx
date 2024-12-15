import Image from "next/image";
import logo from "/src/assets/logo.png";
import Link from "next/link";
import { Button } from "antd";

const Navbar = () => {
  return (
    <div className="grid grid-cols-2 mt-6">
      <div>
        <Image
          className=""
          src={logo}
          width={60}
          height={145}
          alt="Logo of the company"
        />
      </div>
      <div className="flex justify-end mt-3 gap-5">
        <Button type="primary" className="px-6 text-lg">
          <Link href="/user/login">Login</Link>
        </Button>
        <Button type="primary" className="px-6 text-lg">
          <Link href="/user/register">Register</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
