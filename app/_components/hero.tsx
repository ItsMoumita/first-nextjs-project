"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import Image from "next/image";
import { getCategoryList } from "@/lib/categories/list";
import { useState } from "react";

/**
 *
 * URL = BASE_URL, VERSION, PREFIX, API_URL
 * CONFIGURATION = POST/GET/PUT, JSON/XML/HTML
 * BODY = JSON, FORM-DATA
 * RESPONSE =
 * REUSABILITY = ??
 *
 */
type category_type = {
  name: string;
  slug: string;
};


export default function Hero() {
  const [categories, setCategories] = useState<category_type[] | null>(null);

  async function Category() {
    try {
      const res = await getCategoryList();
      setCategories(res.data);
      console.log(categories);
    } catch (error) {
      console.log(error);
    }
  }
  Category();
  return (
    <div className="p-4">
      <div className="h-[70vh] w-full relative overflow-hidden rounded-xl ">
        <Image
          src="/assets/banner.jpg"
          className="h-full w-full object-cover "
          width={1200}
          height={1200}
          alt="banner"
        />
        <div className="absolute  w-full h-full inset-0 rounded-xl  bg-[rgba(0,0,0,0.4)] z-1 "></div>
        <div className="banner-des absolute inset-0 z-10 text-white flex flex-col gap-4 items-center justify-center ">
          <h1 className="text-7xl font-semibold">
            Find your next favorite thing.
          </h1>
          <p className="text-2xl font-semibold">
            Discover and buy amazing things
          </p>
          <div className="mt-12 border-4 border-white p-1 rounded-4xl">
            <button className="btn px-4 py-2 bg-white text-black font-semibold rounded-4xl ">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* banner Carousel  */}
        <div className="absolute bottom-5 left-0 w-full z-10 ">
          <Swiper
            slidesPerView={6}
            centeredSlides={false}
            spaceBetween={20}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper h-[72px]"
          >
            
              {categories?.map((category: category_type, index) => (
                <>
                <SwiperSlide className="bg-[rgb(255,254,254,0.3)] p-4 rounded-lg text-center max-w-[250px] text-white font-lg font-semibold hover:bg-[rgb(255,254,254,0.8)] hover:text-black ">
                <p key={category?.slug}>{category?.name}</p>
                  </SwiperSlide>
                </>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
