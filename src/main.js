import Navigo from "navigo";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("content").innerHTML = content;
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/tuyensinh": () => {
        print(AboutPage.render());
    },
    "/daotao": () => {
        
    },
});
router.resolve();