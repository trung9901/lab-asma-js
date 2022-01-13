import data from "../data";

const NewsListAdmin = {
    render() {
        return `
              <div class="">
                <div class="flex flex-col">
                  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                          <thead class="bg-gray-50">
                            <tr>
                              <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Id
                              </th>
                              <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Image
                              </th>
                              <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Title
                              </th>
                              <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Desc
                              </th>
                              
                              <th scope="col" class="relative px-6 py-3">
                                <span class="sr-only">Edit</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody class="bg-white divide-y divide-gray-200">
                          ${data.map((post) => `<tr>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">${post.id}</div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                              <div class="flex-shrink-0 h-10 w-10">
                                <img class="h-10 w-10 "
                                  src="${post.img}"
                                  alt="">
                              </div>
                              
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">${post.title}</div>
                
                          </td>
                         
                          <td class="px-6 py-4 whitespace-nowrap text-sm ">
                            ${post.desc}
                          </td>
                         
                          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="/admin/news/${post.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                          </td>
                          
                        </tr>`).join("")}
                            
          
                            <!-- More people... -->
                          </tbody>
                        </table>
                       
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
              <div class="mt-10">
              <a href="/admin/news/add" class="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm">
              Add
              </a>
              </div>
   
        `;
    },
};

export default NewsListAdmin;