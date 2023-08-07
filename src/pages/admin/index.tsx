import HomeController from "@/screens/home/HomeController";
import { NextPage } from "next";

const AdminPage: NextPage = () => <HomeController isAdmin={true} />;

export default AdminPage;
