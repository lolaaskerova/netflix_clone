import Billboard from "@/components/HomeSide/Billboard";
import Movies from "@/components/HomeSide/Movies";
import MyList from "@/components/HomeSide/MyList";
import Navbar from "@/components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Billboard />
      <Movies
        title={"Popular"}
        url={
          "https://api.themoviedb.org/3/movie/popular?api_key=82976aa557a864bbd01c50abfe785ff8"
        }
      />
      <Movies
        title={"Upcoming"}
        url={
          "https://api.themoviedb.org/3/movie/upcoming?api_key=82976aa557a864bbd01c50abfe785ff8"
        }
      />
      <Movies
        title={"Top Rated Movies"}
        url={
          "https://api.themoviedb.org/3/movie/top_rated?api_key=82976aa557a864bbd01c50abfe785ff8"
        }
      />

      <MyList />
    </div>
  );
}

export default Home;
