import ParticlesBackground from "@/components/background/pariticlesBackground";
import Body from "@/components/home/body";
import Flex from "antd/lib/flex";

export default function Home() {

  return (
    <>
      <ParticlesBackground />
      <Flex className="h-full relative flex justify-center items-center">
        <Body />
      </Flex>
    </>
  );
}
