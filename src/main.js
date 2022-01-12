import Navigo from "navigo";

const router = new Navigo("/");
// router.on("/", function(){
//     console.log('Home Page')
// });
// router.resolve();
router.on({
    "/": () => {
        console.log("Trang chủ");
    },
    "/about": () => {
        console.log("About Page");
    },
});
router.resolve();