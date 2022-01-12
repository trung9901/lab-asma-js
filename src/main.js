import Navigo from "navigo";

const router = new Navigo("/");

function render(content) {
    document.getElementsByClassName("container").innerHTML = content;
}

// const render = (content) => {
//     document.getElementsByid("test").innerHTML = content;
// };

// router.on("/", function(){
//     console.log('Home Page')
// });
// router.resolve();
router.on({
    "/": () => {
        render("Home page");
    },
    "/about": () => {
        render("<h1>tin tuc hoc tap</h1>");
    },
    "/test": () => {
        render("<h1>hoc tap</h1>");
    },
});
router.resolve();