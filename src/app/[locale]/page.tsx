import ParticlesBackground from "@/components/background/pariticlesBackground";
import Body from "@/components/home/body";
import { ConfigProvider } from "antd/lib";
import Flex from "antd/lib/flex";
import { I18NProvider } from "next/dist/server/lib/i18n-provider";

export default function Home() {

  return (
      <ConfigProvider theme={{
        token: {
          fontFamily: 'Concert One'
        }
      }}>
        <ParticlesBackground />
        <Flex className="h-full relative flex justify-center items-center">
          <Body />
        </Flex>
      </ConfigProvider>
  );
}
