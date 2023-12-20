import styles from "./productItem.module.scss";

import viewSVG from "../../../../public/image/eye-svgrepo-com 1.svg";
import cartSVG from "../../../../public/image/shopping-cart 1.svg";
import likeSVG from "../../../../public/image/heart-svgrepo-com 1.svg";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface IProductCardProps {
  image: StaticImageData;
  title: string;
  price: string;
  width: 300 | 380;
  height: 300 | 380;
  id: string;
}

const HoverMenu = [
  {
    svg: cartSVG,
    class: "cartButton",
    link: "/about",
  },
  {
    svg: viewSVG,
    class: "viewButton",
    link: "/about",
  },
  {
    svg: likeSVG,
    class: "likeButton",
    link: "/about",
  },
];

export const ProductCard = ({
  image,
  title,
  price,
  width,
  height,
  id,
}: IProductCardProps) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageCardWithHover}>
        <Image
          src={image}
          width={width}
          height={height}
          alt="product Image"
          className={styles.imageCard}
        />
        <div className={styles.hoverMenu}>
          {HoverMenu.map((buttonInfo) => {
            return (
              <Link href={buttonInfo.link}>
                <button type="button" className={styles[buttonInfo.class]}>
                  <Image src={buttonInfo.svg} alt="product button" />
                </button>
              </Link>
            );
          })}
        </div>
      </div>
      <div className={styles.productInfo}>
        <span className={styles.title}>{title}</span>
        <span className={styles.price}>$ {price}</span>
      </div>
    </div>
  );
};
