import hotel_banner from "../../assets/img/hotel-banner.jpg" 
import resort from "../../assets/img/resort-photo.jpg" 
import hotel_photo_1 from "../../assets/img/hotel-photo-1.jpg"
import hotel_photo_2 from "../../assets/img/hotel-photo-2.jpg"
import hotel_photo_3 from "../../assets/img/hotel-photo-3.jpg"
import hotel_photo_4 from "../../assets/img/hotel-photo-4.jpg"
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function LandingPage(){
    return(
        <div className="bg-gray-50 text-gray-600">
            <div>
                <div className="container max-w-5xl mx-auto px-4 h-24 flex items-center justify-between">
                    <div className="font-black">
                        LOGO
                    </div>

                    <ul className="flex gap-4">
                        <li><a href="" className="text-sm hover:text-gray-900 hover:underline">Como reservar</a></li>
                        <li><a href="" className="text-sm hover:text-gray-900 hover:underline">Sobre nos</a></li>
                        <li><a href="" className="text-sm hover:text-gray-900 hover:underline">Informações</a></li>
                        <li><a href="" className="text-sm hover:text-gray-900 hover:underline">Contato</a></li>
                    </ul>
                </div>
            </div>

            <div style={{background: `url(${hotel_banner})`, height: "50vh", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                <div className="container max-w-5xl mx-auto px-4 h-full flex items-center justify-center">
                    <div>
                        <div className="text-center">
                            <h1 className="text-white text-2xl mb-2">Onde você quer ir?</h1>
                            <p className="text-white font-medium">Escolha o estado e cidade para achar os melhores resorts.</p>
                        </div>

                        <div className="mt-7">
                            <form className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                <select className="bg-gray-200 px-2 py-1 border border-gray-300 rounded text-gray-500">
                                    <option value="">Escolha o estado</option>
                                </select>

                                <select className="bg-gray-200 px-2 py-1 border border-gray-300 rounded text-gray-500">
                                    <option value="">Escolha a cidade</option>
                                </select>

                                <button className="bg-yellow-500 px-2 py-1 border border-yellow-600 rounded text-yellow-800 font-medium inline-flex items-center col-span-2 lg:col-span-1 justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                    Pesquisar resort
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container max-w-5xl mx-auto px-4 py-20">
                <div className="flex flex-col-reverse lg:flex-row">
                    <div className="lg:pr-10">
                        <div className="text-sm text-gray-400 font-medium">RESORT EM DESTAQUE</div>
                        <div className="text-2xl">Eco resort Praia do forte Bahia</div>
                        <div className="text-sm text-gray-400 font-medium mt-2">Hotel qualidade 5 estrelas</div>
                        <div className="text-sm text-gray-400 font-medium mt-4">
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo assumenda tempore illo. Quod, aperiam praesentium eos, id voluptas reiciendis consequatur velit minus doloribus repellendus autem! Tenetur soluta odio libero porro.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatibus architecto porro inventore dolorem aperiam dolore esse in alias cupiditate! Nulla nesciunt facilis voluptates ut. Quo magni esse maiores ab!</p>
                        </div>
                        
                        <div className="mt-4">
                            <a href="" className="bg-yellow-500 px-2 py-1 border border-yellow-600 rounded text-yellow-800 font-medium inline-flex items-center">
                                Solicitar reserva
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="flex-shrink-0 lg:ml-auto mb-5 lg:mb-0">
                        <img src={resort} alt="Resort Image" width={450}/>
                    </div>
                </div>
            </div>

            <div>
                <div className="container max-w-5xl mx-auto px-4">
                    <div>
                        
                        <h3 className="text-2xl text-gray-500 text-center font-semibold mb-8">Conheça mais resorts</h3>
                        
                        <div className="md:grid grid-cols-4 grid-rows-2 gap-6 space-y-6 md:space-y-0">
                            
                            <div className="relative col-span-2 row-span-2 rounded-lg overflow-hidden">
                                <div className="absolute bottom-0 pl-4 pb-4 text-white font-bold">Beach Park Resort</div>
                                <img src={hotel_photo_1} alt="More hotels image" className="w-full h-full object-cover" />
                            </div>
                            
                            <div className="relative col-span-2 md:h-60 rounded-lg overflow-hidden">
                                <div className="absolute bottom-0 pl-4 pb-4 text-white font-bold">Salinas do Maragogi Resort</div>
                                <img src={hotel_photo_2} alt="More hotels image" className="w-full h-full object-cover" />
                            </div>
                            
                            <div className="relative rounded-lg overflow-hidden">
                                <div className="absolute bottom-0 pl-4 pb-4 text-white font-bold">Grand Palladium</div>
                                <img src={hotel_photo_3} alt="More hotels image" className="w-full h-full object-cover" />
                            </div> 
                            
                            <div className="relative rounded-lg overflow-hidden">
                                <div className="absolute bottom-0 pl-4 pb-4 text-white font-bold">Arraial d'Ajuda Eco Resort</div>
                                <img src={hotel_photo_4} alt="More hotels image" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-20">
                <div className="container max-w-5xl mx-auto px-4 flex justify-center">
                    <form className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                        <select className="bg-gray-200 px-2 py-1 border border-gray-300 rounded text-gray-500">
                            <option value="">Escolha o estado</option>
                        </select>

                        <select className="bg-gray-200 px-2 py-1 border border-gray-300 rounded text-gray-500">
                            <option value="">Escolha a cidade</option>
                        </select>

                        <button className="bg-yellow-500 px-2 py-1 border border-yellow-600 rounded text-yellow-800 font-medium inline-flex items-center col-span-2 lg:col-span-1 justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            Pesquisar resort
                        </button>
                    </form>
                </div>
            </div>

            <div className="border-t border-gray-200">
                <div className="container max-w-5xl mx-auto p-4 flex items-center justify-between">
                    <div className="text-gray-400 font-black">
                        LOGO
                    </div>

                    <div className="flex items-center space-x-3">
                        <a href=""><FaInstagram /></a>
                        <a href=""><FaFacebook /></a>
                        <a href=""><FaTwitter /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}