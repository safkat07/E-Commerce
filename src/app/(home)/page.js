/* eslint-disable @next/next/no-img-element */
import Banner from "@/components/Banner";
import Brands from "@/components/Brands";
import ClientReview from "@/components/ClientReview";
import Delivery from "@/components/Delivery";
import InstagramFeeds from "@/components/InstagramFeeds";
import LimitedOffers from "@/components/LimitedOffers";
import MaxwidthWrapper from "@/components/MaxwidthWrapper";
import NewArrivals from "@/components/NewArrivals";
import NewTrending from "@/components/NewTrending";
import SuperOffer from "@/components/SuperOffer";
import TopCategories from "@/components/TopCategories";
import TopCollection from "@/components/TopCollection";
import TopVendors from "@/components/TopVendors";
import Image from "next/image";
import { auth } from "../../../auth";
import { handleLogOut } from "../actions";
export default async function Home() {
  const session = await auth()

  return (
    <main>
      {
        session?.user && <div className="flex py-2.5 md:flex-row flex-col justify-center items-center gap-5">
          <p className="text-3xl font-semibold ">
            Welcome, {session?.user?.name}
          </p>
          <img className="rounded-full size-16" src={session?.user?.image} alt="" />
          <form action={handleLogOut}>
            <button type="submit" className='h-full flex cursor-pointer justify-center gap-x-3 items-center bg-blue-500 text-white font-semibold  p-1.5 text-lg  w-full  rounded-md'>
              LogOut
            </button>
          </form>
        </div>
      }
      <Banner />
      <TopCollection />
      <NewArrivals />
      <TopCategories />
      <LimitedOffers />
      <TopVendors />
      <Delivery />
      <SuperOffer />
      <NewTrending />
      <ClientReview />
      <Brands />
      <InstagramFeeds />
    </main>
  );
}
