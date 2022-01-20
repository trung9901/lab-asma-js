const Header = {
    render() {
        return /* html */ `
        <header>
            <div class="bg-blue-800 py-4">
            <a href="">
                <img src="https://picsum.photos/150/40" alt="" class="mx-auto">
            </a>
            </div>
            <div class="bg-orange-500">
            <div>
            <ul class="flex">
            <li><a href="/" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Home </a></li>
            <li><a href="/about" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">About</a></li>
            <li><a href="/product" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Product</a></li>
            <li><a href="/contact" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Contact</a></li>
            <li><a href="/admin/dashboard" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Dashboard</a></li>
            </ul>
            </div>
            
            <div>
            <a href="/signin"><button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            signin
            </button></a>
            <a href="/signup"><button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            signup
            </button></a>
            </div>
            </div>
        </header>
        `;
    },
};
export default Header;