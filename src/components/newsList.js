import data from "../data";

const NewsList = {
    render() {
        return /* html */`
                <h2 class="font-semibold text-2xl uppercase text-blue-800 my-4">Tin tức học tập</h2>
                <div class="grid grid-cols-3 gap-8">
                    ${data.map((post) => `
                        <div class="border p-4">
                            <a href="/news/${post.id}">
                                <img src="${post.img}" alt="" width="100%"/>
                            </a>
                            <h3 class="my-3"><a href="/news/${post.id}" class="text-orange-800 font-bold my-3">${post.title}</a></h3>                    
                            <p>${post.desc}</p>
                        </div>
                    `).join("")}

                </div>
                
        `;
    },
};

export default NewsList;