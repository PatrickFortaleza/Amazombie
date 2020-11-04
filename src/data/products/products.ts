import { Product } from '../models/product.model'

export let Products: Array<Product> = [
  {
    title: 'Tier A',
    subtitle: 'Get Those Zombies Off My Lawn',
    price: 899.99,
    id: 1,
    quantity: 1,
    imagePath: '../../assets/images/tier-1.png',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    stars: 4,
    halfStars: 1,
  },
  {
    title: 'Tier B',
    subtitle: 'Get Those Zombies Off My Lawn',
    price: 599.99,
    id: 2,
    quantity: 1,
    imagePath: '../../assets/images/tier-2.png',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    stars: 4,
    halfStars: 0,
  },
  {
    title: 'Tier C',
    subtitle: 'Get Those Zombies Off My Lawn',
    price: 399.99,
    id: 3,
    quantity: 1,
    imagePath: '../../assets/images/tier-3.png',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    stars: 3,
    halfStars: 1,
  }
] 

