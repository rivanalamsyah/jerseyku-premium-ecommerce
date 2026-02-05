export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    stock: boolean;
    rating: number;
    sold: number;
}

export const products: Product[] = [
    { id: 1, name: 'Jersey Futsal Evo Black', category: 'Futsal', price: 149000, image: '/images/products/futsal-evo.jpg', stock: true, rating: 4.9, sold: 254 },
    { id: 2, name: 'Jersey Futsal Neon Velocity', category: 'Futsal', price: 155000, image: '/images/products/futsal-blue.jpg', stock: true, rating: 4.8, sold: 180 },
    { id: 3, name: 'Jersey Esport Pro Team', category: 'Esport', price: 189000, image: '/images/products/esport-pro.jpg', stock: false, rating: 5.0, sold: 89 },
    { id: 4, name: 'Jersey Basket Urban Street', category: 'Basket', price: 159000, image: '/images/products/basket-urban.jpg', stock: true, rating: 4.7, sold: 120 },
    { id: 5, name: 'Jersey Sepeda Aero Red', category: 'Sepeda', price: 175000, image: '/images/products/bike-aero.jpg', stock: true, rating: 4.8, sold: 310 },
    { id: 6, name: 'Training Kit Basic Navy', category: 'Training', price: 99000, image: '/images/products/training-navy.jpg', stock: true, rating: 4.6, sold: 500 },
    { id: 7, name: 'Jersey Soccer Golden Eagle', category: 'Futsal', price: 165000, image: '/images/products/futsal-dark-gold.jpg', stock: true, rating: 4.9, sold: 145 },
    { id: 8, name: 'Jersey Esport Cyber Punk', category: 'Esport', price: 195000, image: '/images/products/esport-cyber.jpg', stock: true, rating: 4.9, sold: 76 },
    { id: 9, name: 'Jersey Basket Retro Legacy', category: 'Basket', price: 169000, image: '/images/products/basket-retro.jpg', stock: true, rating: 4.8, sold: 92 },
    { id: 10, name: 'Jersey Sepeda Pro Pelton', category: 'Sepeda', price: 185000, image: '/images/products/bike-pro.jpg', stock: true, rating: 4.7, sold: 110 },
    { id: 11, name: 'Jacket Sport Windbreaker', category: 'Training', price: 225000, image: '/images/products/jacket-sport.jpg', stock: true, rating: 4.8, sold: 54 },
    { id: 12, name: 'Training Kit Stealth Black', category: 'Training', price: 115000, image: '/images/products/training-black.jpg', stock: true, rating: 4.7, sold: 210 },
    { id: 13, name: 'Polo Shirt Performance', category: 'Training', price: 135000, image: '/images/products/polo-sport.jpg', stock: true, rating: 4.6, sold: 88 },
    { id: 14, name: 'Jersey Esport Neon Shard', category: 'Esport', price: 179000, image: '/images/products/esport-neon.jpg', stock: true, rating: 4.8, sold: 132 },
    { id: 15, name: 'Jersey Soccer Yellow Strike', category: 'Futsal', price: 145000, image: '/images/products/soccer-yellow.jpg', stock: true, rating: 4.7, sold: 167 },
    { id: 16, name: 'Jersey Futsal Blue Azure', category: 'Futsal', price: 149000, image: '/images/products/futsal-blue.jpg', stock: true, rating: 4.8, sold: 143 },
];
