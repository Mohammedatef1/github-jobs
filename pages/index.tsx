import useJobs from "@/hooks/useJobs";
import axios from "axios";
import Content from "../components/layout/Content";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import JopPage from "../components/layout/JobPage";

export default function Home() {
  return (
    <main className="lg:px-28 lg:py-8 md:px-20 md:py-6 p-3 ">
      <Header></Header>
      <Content></Content>
      {/*<JopPage></JopPage>*/}
      <Footer></Footer>
    </main>
  );
}
