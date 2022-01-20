import Navigo from "navigo";
import AboutPage from "./pages/about";
import DashboardPage from "./pages/admin/dashboard";
import AdminNewsPage from "./pages/admin/news";
import AdminNewsAddPage from "./pages/admin/news/add";
import DetailNewsPage from "./pages/detail";
import HomePage from "./pages/home";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
};

router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/news/:id": (value) => print(DetailNewsPage, value.data.id),
    "/admin/dashboard": () => print(DashboardPage),
    "/admin/news": () => print(AdminNewsPage),
    "/admin/news/add": () => print(AdminNewsAddPage),
});
router.resolve();