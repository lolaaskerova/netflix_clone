"use client";
import { useRouter } from "next/router";
import { getServerSidePropsAuth } from "./utils/authUtils";
import Billboard from "@/components/HomeSide/Billboard";
import Movies from "@/components/HomeSide/Movies";
import { movies } from "@/data/movies";
import MyList from "@/components/HomeSide/MyList";

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
      <Billboard />
      <Movies data={movies} />
      <MyList />
    </div>
  );
}

export { getServerSidePropsAuth };
export default Home;
