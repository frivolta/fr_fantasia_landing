"use client";
import Image from "next/image";

const MainPhone = () => {
  return (
    <Image
      src="/main_phone.png"
      fill
      style={{ objectFit: "contain" }}
      alt="Filippo Rivolta Fantasia Iphone"
    />
  );
};
export default MainPhone;
