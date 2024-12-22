"use client";

import AnimatedButton from "@/components/ui/animated-button";
import Image from "next/image";
import { PiPlayCircleFill, PiArrowUpRight } from "react-icons/pi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const courses = [
  {
    title: "Primo Cast: EP #221 Como viver uma vida Melhor.",
    description: "Descrição do curso",
    image: "/product-1.png",
    href: "/course/1",
  },
  {
    title: "Outro Curso Interessante",
    description: "Descrição do curso",
    image: "/product-2.png",
    href: "/course/2",
  },
  {
    title: "Outro Curso Interessante",
    description: "Descrição do curso",
    image: "/product-3.png",
    href: "/course/2",
  },
];

const interestYou = [
  {
    title: "Primo Cast: EP #221 Como viver uma vida Melhor.",
    modules: "10 módulos",
    hours: "50 horas",
    type: "Educacional",
    image: "/product-4.png",
    href: "/course/1",
  },
  {
    title: "Outro Curso Interessante",
    modules: "10 módulos",
    hours: "50 horas",
    type: "Educacional",
    image: "/product-5.png",
    href: "/course/2",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col lg:flex-row lg:items-start gap-8 p-6">
      <aside className="grid grid-cols-1 gap-5 lg:w-[70%]">
        <section className="relative w-full h-[258px] shadow-md">
          <Image
            src="/recently-watched-bg.jpg"
            alt="Recently Watched"
            fill
            className="rounded-xl object-cover"
          />
          <div className="absolute lg:inset-0 rounded-lg bg-gradient-to-r from-black/80 via-black/40 to-black/30" />
          <div className="absolute bottom-6 left-6 lg:max-w-[45%]">
            <span className="text-xs text-[#94A3B8]">Recently Watched</span>
            <h1 className="mt-3 text-white text-lg xl:text-xl font-medium">
              Primo Cast: EP #221 Como viver uma vida Melhor.
            </h1>
            <AnimatedButton className="mt-2 py-2 px-3" variant="blueLinks">
              <PiPlayCircleFill /> Watch Now
            </AnimatedButton>
          </div>
        </section>
        <section className="space-y-5">
          <div className="flex justify-between items-center">
            <h1 className="text-xl text-[--text-black]">Your Courses</h1>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#"
                className="text-[--text-primary] flex items-center gap-2 text-sm"
              >
                Explore More <PiArrowUpRight />
              </Link>
            </motion.div>
          </div>
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
                  className="md:basis-1/2 xl:basis-1/3"
                >
                  <Card className="border-none">
                    <CardContent className="flex flex-col gap-3 p-0 bg-[--background-container-traffic] rounded-xl">
                      <div className="relative w-full h-[200px]">
                        <Image
                          src={course.image}
                          alt="Product"
                          fill
                          className="object-cover rounded-xl"
                        />
                      </div>
                      <div className="space-y-1 p-4">
                        <h1 className="text-[--text-black] text-lg xl:text-xl font-medium text-nowrap text-ellipsis overflow-x-hidden">
                          {course.title}
                        </h1>
                        <p className="text-[--text-zinc] text-sm text-nowrap text-ellipsis overflow-x-hidden">
                          {course.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 pt-3">
                            <Avatar className="size-6">
                              <AvatarImage src="https://github.com/shadcn.png" />
                              <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <h1 className="text-xs text-[#334155] dark:text-[#CBD5E1] text-nowrap text-ellipsis overflow-x-hidden">
                              Pedro Gontijo Braz
                            </h1>
                          </div>
                          <AnimatedButton
                            className="mt-4 px-2 flex items-center gap-2 text-[--text-primary] hover:text-[--text-primary]"
                            variant="outline"
                          >
                            <PiPlayCircleFill /> Watch Now
                          </AnimatedButton>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>
        <section className="space-y-5">
          <div className="flex justify-between items-center">
            <h1 className="text-xl text-[--text-black]">May Interest You</h1>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#"
                className="text-[--text-primary] flex items-center gap-2 text-sm"
              >
                Explore More <PiArrowUpRight />
              </Link>
            </motion.div>
          </div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {interestYou.map((interest, index) => (
                <CarouselItem
                  key={`${interest.title}-${index}`}
                  className="md:basis-1/2"
                >
                  <Card className="border-none">
                    <CardContent className="flex flex-col gap-3 p-0 bg-[--background-container-traffic] rounded-xl">
                      <div className="relative w-full h-[200px]">
                        <Image
                          src={interest.image}
                          alt="Product"
                          fill
                          className="object-cover rounded-xl"
                        />
                      </div>
                      <div className="space-y-1 p-4">
                        <h1 className="text-[--text-black] text-lg xl:text-xl font-medium text-nowrap text-ellipsis overflow-x-hidden">
                          {interest.title}
                        </h1>
                        <div className="text-[--text-zinc] text-sm [&>span]:px-1 [&>span]:text-nowrap [&>span]:text-ellipsis [&>span]:overflow-x-hidden divide-x">
                          <span>{interest.modules}</span>
                          <span>{interest.hours}</span>
                          <span>{interest.type}</span>
                        </div>
                        <AnimatedButton
                          className="mt-4 flex items-center gap-2 text-[--text-primary] hover:text-[--text-primary]"
                          variant="outline"
                        >
                          <PiPlayCircleFill /> Watch Now
                        </AnimatedButton>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>
      </aside>
      <aside className="grid grid-cols-1 gap-4 lg:w-[30%]">
        <article className="relative bg-gradient-to-br from-[#00CECE] to-[#00A0D8] p-4 rounded-xl shadow-md overflow-hidden">
          <div className="absolute left-[-80px] top-[-80px] w-[150px] h-[150px] rounded-full bg-gradient-to-tr from-[#FFFFFF29] via-[#FFFFFF] to-transparent opacity-15 z-0" />
          <div className="absolute right-[-50px] bottom-[-50px] w-[150px] h-[150px] rounded-full bg-gradient-to-tr from-[#FFFFFF29] via-[#FFFFFF] to-transparent opacity-20 z-0" />

          <div className="md:max-w-[80%] xl:max-w-[50%]">
            <h1 className="relative text-white text-lg xl:text-xl font-medium z-10">
              Get your Products, on Cooud Pay
            </h1>
            <p className="relative mt-0.5 text-sm text-[#FFFFFFB2] z-10">
              Timer, Calendar, Image, etc
            </p>
            <AnimatedButton
              className="mt-4 flex items-center gap-2 bg-[--background-default] text-[--text-primary]"
              variant="default"
            >
              <PiPlayCircleFill /> Watch Now
            </AnimatedButton>
          </div>
        </article>
        <article className="relative bg-[--background-container-traffic] border border-[--border-color] p-4 rounded-xl shadow-md overflow-hidden">
          <div className="absolute left-[-80px] top-[-80px] w-[150px] h-[150px] rounded-full bg-gradient-to-tr from-[--overlay-bg-blue] via-[--overlay-bg-blue-50] to-transparent opacity-20 z-0" />
          <div className="absolute right-[-50px] bottom-[-50px] w-[150px] h-[150px] rounded-full bg-gradient-to-tr from-[--overlay-bg-blue] via-[--overlay-bg-blue-50] to-transparent opacity-20 z-0" />

          <span className="relative text-sm text-[--text-zinc] z-10">
            Where you left off
          </span>
          <h1 className="relative text-[--text-black] text-lg xl:text-xl font-medium z-10">
            Traffic Management Class
          </h1>
          <AnimatedButton
            className="mt-4 flex items-center gap-2"
            variant="blueLinks"
          >
            <PiPlayCircleFill /> Watch Now
          </AnimatedButton>
        </article>
        <article className="bg-[--background-container-traffic] rounded-xl shadow-md">
          <div className="relative w-full h-[192px]">
            <Image
              src="/podcast-bg.png"
              alt="Recently Watched"
              fill
              className="rounded-xl object-cover"
            />
          </div>
          <div className="p-4">
            <span className="relative text-sm text-[--text-zinc]">
              Podcasts Now.
            </span>
            <h1 className="relative text-[--text-black] xl:text-lg font-medium max-w-[90%]">
              Primo Cast: EP #221 Como viver uma vida Melhor.
            </h1>
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between">
              <div className="flex items-center mt-3">
                <Avatar className="border-2 border-[--background-container-traffic] hover:z-10 hover:scale-[1.04] duration-300">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="-ml-2.5 border-2 border-[--background-container-traffic] hover:z-10 hover:scale-[1.04] duration-300">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="-ml-2.5 border-2 border-[--background-container-traffic] hover:z-10 hover:scale-[1.04] duration-300">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="-ml-2.5 text-xs xl:text-sm flex items-center justify-center h-10 w-10 bg-[--background-container-traffic] border border-[--border-color] rounded-full hover:scale-[1.04] duration-300 z-20">
                  12+
                </div>
              </div>

              <AnimatedButton
                className="mt-4 flex items-center gap-2 text-[--text-primary] hover:text-[#00a0d8]"
                variant="outline"
              >
                <PiPlayCircleFill /> Watch Now
              </AnimatedButton>
            </div>
          </div>
        </article>
      </aside>
    </main>
  );
}
