import Billboard from "@/components/HomeSide/Billboard";
import Movies from "@/components/HomeSide/Movies";
import MyList from "@/components/HomeSide/MyList";
import Navbar from "@/components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Billboard />
      <Movies />
      <MyList />
    </div>
  );
}

export default Home;
