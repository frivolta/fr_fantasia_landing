import Image from "next/image";

const Footer = () => {
  return (
    <div className="border-t border-t-red-500 w-full pt-4 px-4 text-secondary">
      <div className="flex text-secondary items-center justify-center">
        <Image
          src="heart.svg"
          width={18}
          height={18}
          className="mr-2"
          alt="Made by Filippo Rivolta"
        />
        <p>
          <small>Filippo Rivolta 2023</small>
        </p>
      </div>
    </div>
  );
};
export default Footer;
