import styles from './page.module.css';

import Slider from './components/Slider/Slider';
import productImg1 from './../../public/image/card1.jpg';

import Link from 'next/link';
import { ProductCard } from './components/ProductCard/ProductCard';

export interface IMassCard {
  img: string;
  title: string;
  price: number;
}

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/items', {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export interface IJewelry {
  _id: string;
  name: string;
  img: string;
  desc: string;
  count: number;
  material: string;
  weight: string;
  price: number;
  dimensions: string;
  colors: string[];
  categories: string;
  rating: number;
}

const Home = async () => {

  return (
    <>
      <div className="main-slider">
        <Slider />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.title}>Shop The Latest</div>
        <Link href="/shop" className={styles.link}>
          View All
        </Link>
      </div>
      <div className={styles.cardWrapper}>
        <ProductCard
          height={380}
          width={380}
          image={productImg1}
          id='biba'
          price='29,00'
          title='Nipples'
        />
      </div>
    </>
  );
};

export default Home;
