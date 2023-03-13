import Image from "next/image";
import React from "react";
import SidebarLink from "./SidebarLink";
import { HomeIcon } from "@heroicons/react/24/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";

export default function Sidebar() {
  const {data: session} = useSession();


  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        <Image src="https://icon-library.com/images/twitter-icon-svg/twitter-icon-svg-28.jpg" width={30} height={30} alt={""} />
      </div>

      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} active={false} />
        <SidebarLink text="Notifications" Icon={BellIcon} active={false} />
        <SidebarLink text="Messages" Icon={InboxIcon} active={false} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} active={false} />
        <SidebarLink text="Lists" Icon={ClipboardIcon} active={false} />
        <SidebarLink text="Profile" Icon={UserIcon} active={false} />
        <SidebarLink text="More" Icon={EllipsisHorizontalCircleIcon} active={false} />
      </div>

      <button
        className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white 
      rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]"
      >
        Tweet
      </button>

      <div className="text-[#d9d9d9] flex items-center justify-center hoverAnimation
      xl:ml-auto xl:-mr-5 mt-auto" onClick={signOut}>

        <img
          src={session.user.image}
          alt=""
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />

        <div className="hidden xl:inline leading-5">
            <h4 className="font-bold">{session?.user.name}</h4>
            <p className="text-[#6e767d]">@{session?.user.tag}</p>
        </div>

        <EllipsisHorizontalIcon className="h-5 hidden xl:inline ml-10" />

      </div>
    </div>
  );
}
