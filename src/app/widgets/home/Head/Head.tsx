import MainButton from "@/app/components/Button/MainButton";
import Image from "next/image";

Image;
const Head = () => {
  return (
    <div className="py-32">
      <div className="pb-8">
        <Image
          src="fantasia_royal.svg"
          alt="Filippo Rivolta Fantasia Taylored Dreams"
          width={194}
          height={57}
        />
      </div>
      <div>
        <h1 className="text-primary">
          From Blueprint to Build.{" "}
          <span className="text-primaryDark">
            The Evolution and lifecycle of a Creative Endeavor.
          </span>
        </h1>
      </div>
      <div className="pt-8 flex justify-start">
        <div className="flex justify-start">
          <MainButton text="App Store" iconUrl="apple.svg" />
        </div>
      </div>
    </div>
  );
};

export default Head;
