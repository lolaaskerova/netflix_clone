"use client";
import { useRouter } from "next/router";
import Billboard from "@/components/HomeSide/Billboard";
import Movies from "@/components/HomeSide/Movies";
import { movies } from "@/data/movies";
import MyList from "@/components/HomeSide/MyList";
import Navbar from "@/components/Navbar";

function Home({ session }) {
  // const router = useRouter();

  // useEffect(() => {
  //   if (!session) {
  //     console.log("redirecting to /auth");
  //     router.push("/auth");
  //   } else if (session && router.pathname !== "/") {
  //     console.log("redirecting to  /");
  //     router.push("/");
  //   }
  // }, [session, router]);

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
