import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import brain from "@/assets/brain.png";
import { Button } from "antd";
const Home = () => (
  <div className="container mx-auto">
    <Navbar />
    <div>
      <h2 className="text-6xl font-bold">
        We Make Your <br /> Campaign 2X Accurate
      </h2>
    </div>
    <div className="flex gap-24  my-8">
      <div>
        <p className="text-start text-xl">
          The more campaigns you run, the more accurate <br /> our system
          becomes. Our system is gradually gaining <br /> more experience than
          any other marketer in the world
        </p>
      </div>
      <div>
        <Image src={brain} width={631} height={360} alt="brain" />
      </div>
    </div>
    <Button
      type="primary"
      shape="round"
      className="my-5 text-lg font-semibold p-5 "
    >
      {" "}
      Start Advertising
    </Button>
  </div>
);

export default Home;
