"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const courses = [
  {
    title: "Primo Cast: EP #221 Como viver uma vida Melhor.",
    description: "Descrição do curso",
    image: "/product-1.png",
    href: "/course/1",
    duration: "2h 33m",
  },
  {
    title: "Outro Curso Interessante",
    description: "Descrição do curso",
    image: "/product-2.png",
    href: "/course/2",
    duration: "2h 30m",
  },
  {
    title: "Outro Curso Interessante",
    description: "Descrição do curso",
    image: "/product-3.png",
    href: "/course/3",
    duration: "2h 40m",
  },
  {
    title: "Primo Cast: EP #221 Como viver uma vida Melhor.",
    description: "Descrição do curso",
    image: "/product-1.png",
    href: "/course/4",
    duration: "3h 30m",
  },
  {
    title: "Outro Curso Interessante",
    description: "Descrição do curso",
    image: "/product-2.png",
    href: "/course/5",
    duration: "6h 30m",
  },
  {
    title: "Outro Curso Interessante",
    description: "Descrição do curso",
    image: "/product-3.png",
    href: "/course/6",
    duration: "1h 30m",
  },
];

const popularUser = [
  {
    name: "Jassaine Mumtaz",
    image: "/users/user-1.png",
    role: "Podcaster",
  },
  {
    name: "James David",
    image: "/users/user-2.png",
    role: "Manager",
  },
  {
    name: "Rose Hines",
    image: "/users/user-3.png",
    role: "Podcaster",
  },
  {
    name: "Jackson Thiago",
    image: "/users/user-4.png",
    role: "Manager",
  },
  {
    name: "Jassaine Mumtazs",
    image: "/users/user-1.png",
    role: "Podcaster",
  },
  {
    name: "James Davidd",
    image: "/users/user-2.png",
    role: "Manager",
  },
  {
    name: "Rose Hiness",
    image: "/users/user-3.png",
    role: "Podcaster",
  },
  {
    name: "Jackson Thiagoo",
    image: "/users/user-4.png",
    role: "Manager",
  },
];

const Discover = () => {
  return (
    <main className="w-full">
      <section className="w-full h-screen flex items-end">
        <div className="absolute w-full h-screen">
          <Image
            src="/discover-bg.png"
            alt="Discover"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A] via-[#0F172A]/90 to-[#0F172A00]" />
        </div>
        <div className="w-full px-6 py-8">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {courses.map((course, index) => (
                <CarouselItem
                  key={`${course.title}-${index}`}
                  className="md:basis-1/2 xl:basis-1/4"
                >
                  <Card className="border-none">
                    <CardContent className="flex flex-col gap-2 p-0.5 bg-[--background-container-traffic] rounded-xl ">
                      <div className="relative w-full h-[200px]">
                        <Image
                          src={course.image}
                          alt="Product"
                          fill
                          className="object-cover rounded-xl"
                        />
                        <h1 className="absolute bottom-3 left-3 inline-flex bg-[#0206175C] text-white text-sm rounded-md py-1 px-2">
                          {course.duration}
                        </h1>
                      </div>
                      <div className="space-y-1 p-4">
                        <h1 className="text-[--text-black] text-lg xl:text-xl font-medium text-nowrap text-ellipsis overflow-x-hidden">
                          {course.title}
                        </h1>
                        <p className="text-[--text-zinc] text-sm text-nowrap text-ellipsis overflow-x-hidden">
                          {course.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
      <section className="px-6 py-10">
        <h1 className="text-2xl font-medium text-[--text-black]">
          Popular User
        </h1>
        <div className="w-full py-8">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {popularUser.map((users, index) => (
                <CarouselItem
                  key={`${users.name}-${index}`}
                  className="basis-1/2 xl:basis-1/6"
                >
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center gap-6 py-6 px-4 bg-[--background-container-traffic] rounded-xl ">
                      <Avatar className="size-32">
                        <AvatarImage src={users.image} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col items-center justify-center">
                        <h1 className="text-lg text-[--text-black] font-bold">
                          {users.name}
                        </h1>
                        <p className="text-sm text-[--text-zinc]">
                          {users.role}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </main>
  );
};

export default Discover;
