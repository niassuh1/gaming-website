import type { NextPage } from "next";
import Image from "next/image";
import { Card } from "../components/card";
import { StreamerItem } from "../components/streamers/streamer-item";
import { StreamersList } from "../components/streamers/streamers-list";
import Neon from "../images/Neon.png";
import Sage from "../images/Sage.png";
import Streamer1 from "../images/streamer-01.jpg";
import Streamer2 from "../images/streamer-02.png";
import Streamer3 from "../images/streamer-03.png";
import { faker } from "@faker-js/faker";

const Home: NextPage = () => {
  return (
    <div className="p-4 space-y-6">
      <section className="flex flex-wrap gap-3">
        <div className="bg-[#ec5f5a] flex flex-auto md:flex-[8] flex-wrap w-full p-3 relative rounded-3xl overflow-hidden h-[489px]">
          <div className="flex flex-col gap-3 bg-black-dark/30 rounded-3xl z-10 backdrop-blur-md flex-auto md:flex-1 p-4">
            <h3 className="font-light tracking-widest uppercase">
              #1 Trending
            </h3>
            <h1 className="font-semibold text-4xl">
              Watch streaming games anywhere anytime
            </h1>
            <p>Watch your favorite streamers compete only on Gamify</p>
          </div>
          <div className="flex-1 hidden md:flex" />
          <div className="w-80 absolute right-28">
            <Image src={Neon} alt="Valorant Character" layout="intrinsic" />
          </div>
          <div className="w-80 absolute -right-24">
            <Image src={Sage} alt="Valorant Character" layout="intrinsic" />
          </div>
        </div>

        <Card className="flex flex-col gap-3 flex-[1] min-w-[362px] rounded-3xl p-6">
          <h1 className="text-xl font-semibold">Top Streamers</h1>
          <StreamersList>
            <StreamerItem
              src={Streamer1}
              name={"Karianne58"}
              followers={102021}
              verified
            />
            <StreamerItem
              src={Streamer2}
              name={"Marilyne.King38"}
              followers={20312}
              verified
            />
            <StreamerItem
              src={Streamer3}
              name={"Tressie_Yundt8"}
              followers={221312}
              verified
            />
          </StreamersList>
        </Card>
      </section>

      <section className="">
        <h1 className="text-xl uppercase tracking-widest font-light">
          Trending
        </h1>
      </section>
    </div>
  );
};

export default Home;
