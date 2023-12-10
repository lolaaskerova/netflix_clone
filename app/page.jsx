"use client";
import { useRouter } from "next/router";
import Billboard from "@/components/HomeSide/Billboard";
import Movies from "@/components/HomeSide/Movies";
import { movies } from "@/data/movies";
import MyList from "@/components/HomeSide/MyList";
import Navbar from "@/components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Billboard />
      <Movies data={movies} />
      <MyList />
    </div>
  );
}

export default Home;
