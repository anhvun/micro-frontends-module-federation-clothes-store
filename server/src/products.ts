export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Tuxedo',
    price: 120.99,
    description: 'A nice black tux',
    image: 'http://localhost:8080/tuxedo.jpg',
    longDescription:
      'Tuxedo is all you need, in this modern age and so on you would think it would keep you warm, but it is actually just for mimicing a nice penguin suit',
  },
  {
    id: 2,
    name: 'Red dress',
    price: 299.99,
    description: 'A red dress, more red than red wine',
    image: 'http://localhost:8080/reddress.jpg',
    longDescription:
      'Never show the dress in front of a bull, will get aggressive immediately. Buyers beware! We are not in a circus',
  },
  {
    id: 3,
    name: 'Jeggings',
    price: 69.99,
    description: 'Modern day leggings.',
    image: 'http://localhost:8080/jeggings.jpg',
    longDescription:
      'What if you would want to mix both the best of jeans and leggings? Enter jeggings, feeling the rough texture of jeans, but still being as elastic as leggings. Best of both worlds. Literally.',
  }
];

export default products;
