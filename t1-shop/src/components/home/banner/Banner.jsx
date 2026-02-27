import Image from "next/image";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image
        className={styles.imgBanner}
        src="/main_banner.png"
        alt="Banner"
        fill
      />
    </div>
  );
}
