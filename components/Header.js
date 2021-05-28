import {
  HomeIcon,
  CollectionIcon,
  BadgeCheckIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <div className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem
          title="Home"
          onClick={() => router.push("/")}
          Icon={HomeIcon}
        />
        <HeaderItem
          title="TRENDING"
          onClick={() => router.push("/")}
          Icon={LightningBoltIcon}
        />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        width={200}
        height={100}
        src="http://links.papareact.com/ua6"
      />
    </div>
  );
}
