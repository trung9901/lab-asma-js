const Header = {
    render() {
        return `
        <div class="logo bg-[#272f54] py-3">
        <img src="./img/logo.png" alt="logo" width="" class="mx-auto" />
      </div>
  
      <div class="navigation bg-[#cb7802] flex justify-between  text-white ">
        <div class="menu ">
          <ul class="flex ml-6">
            <li><a href="/" class="block px-5 hover:bg-blue-900 py-3">Home </a></li>
            <li><a href="/about" class="block px-5 hover:bg-blue-900 py-3">About</a></li>
            <li><a href="/news" class="block px-5 hover:bg-blue-900 py-3">News</a></li>
            <li><a href="/contact" class="block px-5 hover:bg-blue-900 py-3">Contact</a></li>
            <li><a href="/admin/dashboard" class="block px-5 hover:bg-blue-900 py-3">Dashboard</a></li>
          </ul>
        </div>

      <div class="">
      <a href="/signup"
      class="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
      <span
        class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
      <span
        class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
      <span class="relative z-20 flex items-center text-sm">
        <svg class="relative w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
        Đăng ký
      </span>
    </a>
      </div>
      <div class="">
        <a href="/signin"
          class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
          <span
            class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
          <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
          <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
          <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Đăng nhập</span>
        </a>
  
      </div>
      </div>
      `;
    },
};
export default Header;