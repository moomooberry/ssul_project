import HomeController from "@/screens/home/HomeController";
import { NextPage } from "next";

const HomePage: NextPage = () => <HomeController isAdmin={false} />;

export default HomePage;
