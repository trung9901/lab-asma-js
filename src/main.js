import Navigo from "navigo";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import Header from "./components/header";
import NewsPage from "./pages/news";
import DetailNewsPage from "./pages/details";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import DashBoard from "./admin/dashboard";
import AddNews from "./admin/add";
import EditNews from "./admin/edit";
import NewsListAdmin from "./admin/news";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("content").innerHTML = content;
    document.getElementById("header").innerHTML = Header.render();
};

// const print2 = (container) => {
//     document.getElementById("container").innerHTML = container;
// };

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/news": () => {
        print(NewsPage.render());
        // print(DetailNewsPage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(id));
    },
    "/signin": () => {
        print(SignIn.render());
    },
    "/signup": () => {
        print(SignUp.render());
    },
    "/admin/dashboard": () => {
        print(NewsListAdmin.render());
    },
    // "/admin/news": () => {
    //     print(NewsList.render());
    // },
    "/admin/news/:id/edit": ({ data }) => {
        const { id } = data;
        print(EditNews.render(id));
    },
    "/admin/news/add": () => {
        print(AddNews.render());
    },

});
router.resolve();