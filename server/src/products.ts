export interface Product {
    id:number;
    name: string;
    price : number;
    description: string;
    image: string;
    longDescription; 
}

const products: Product[]= [
    {
        id: 1, 
        name: 'Lenovo Legion 7',
        price: 15000,
        description: 'Lenovo Legion 7 Intel Core i7-11700F - 16GB Memory - NVIDIA GeForce RTX 3060 - 1TB HDD + 512GB SSD.',
        image: 'http://localhost:8080/Lenovo-legion-7.webp',
        longDescription:
         'THE WORLDS FIRST 16" QHD GAMING LAPTOP Underneath the legion 7s refined aerospace grade aluminium storm grey exterior is a savage engine; the latest generation of AMD processing and NVIDIA GeForce RTX, AI optimised via Legion AI Engine with next-gen Legion Coldfront 3.0 thermal cooling system. The taller 16:10 aspect ratio and upto 165hz refresh rates of the 16 display place you in the gaming winning zone to raise your sightlines and strengthen your immersion.Plus, the legion 7 deploys the full power version of NVIDIA GPU, thats next level elite gaming.'
    },
    {
        id: 2, 
        name: 'ASUS - ROG Gaming Desktop',
        price: 20000,
        description: 'ASUS - ROG Gaming Desktop - Intel Core i7-11700F - 16GB Memory - NVIDIA GeForce RTX 3060 - 1TB HDD + 512GB SSD.',
        image: 'http://localhost:8080/Asus-ROG-Desktop.jpg',
        longDescription:
         'Upgrade from the last generation with the new ROG Strix G10CE, a Windows 11 gaming desktop that delivers exhilarating gaming experiences powered by an 11th Gen Intel® Core™ i7-11700F processor and NVIDIA® GeForce RTX™ 3060 graphics.'
    },
    {
        id: 3, 
        name: 'HP OMEN - 30L Gaming Desktop',
        price: 22000,
        description: 'HP OMEN - 30L Gaming Desktop - AMD Ryzen 5 5600G - 16GB Memory - NVIDIA® GeForce RTX™ 3060 - 1TB SSD - Shadow Black.',
        image: 'http://localhost:8080/HPOmen.jpg',
        longDescription:
         'With great power comes this: The OMEN 30L Gaming Desktop PC lives for the thrill of the chase, never leaves a friend behind, and makes a mean midnight snack of action and adventure. '
    },
    {
        id: 4, 
        name: 'Alienware - AW2720HF 27',
        price: 8000,
        description: 'Alienware - AW2720HF 27" IPS LED FHD FreeSync and G-SYNC Compatible Gaming Monitor (DisplayPort, HDMI, USB) - Black.',
        image: 'http://localhost:8080/Alienware.jpg',
        longDescription:
         'Play like a professional with this Alienware 27-inch gaming monitor. A refresh rate of 240Hz and response time of 1ms help improve your reaction times, and AMD Radeon FreeSync technology helps prevent tearing and artifacts. Boasting native Full HD resolution, this Alienware 27-inch gaming monitor ensures games look clear and detailed.'
    },
    {
        id: 5, 
        name: 'Samsung - Odyssey G7 28',
        price: 7500,
        description: 'Cool gaming monitor from Alienware',
        image: 'http://localhost:8080/Samsung.jpg',
        longDescription:
         'Samsung - Odyssey G7 28 IPS 1ms 4K UHD FreeSync & G-Sync Compatible Gaming Monitor with HDR - Black Take the fight to any gaming challenge, with Samsungs ultimate 28” gaming monitor, the G70A - equipped with a 1ms response time, UHD 4K resolution, 144hz refresh rate with G-Sync and FreeSync Premium support, HDMI 2.1, and fully customizable Odyssey Infinity Core lighting.'
    },
    {
        id: 5, 
        name: 'Razer - Blade 14',
        price: 15000,
        description: 'Gaming Laptop- FHD 144Hz- AMD Ryzen 9 5900HX- NVIDIA GeForce RTX 3060- 16GB RAM- 1TB SSD - Black',
        image: 'http://localhost:8080/Razer.jpg',
        longDescription:
         'For those who want all or nothing, go all out with the Razer Blade 14—the ultimate AMD gaming laptop in every way imaginable. From its ultra-powerful CPU to its graphics, its fast display to its portability, we have maxed out all aspects of the Razer Blade 14 to bring you an uncompromising experience that cant be beat.'
    },

]

export default products;