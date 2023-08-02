import Image from "next/image";

export const ImageBlock = () => {
  return (
    <>
      <h2 className="text-primary">
        Employing Flutter, the frontend embodies responsiveness and visual
        appeal.
      </h2>
      <div className="mt-12">
        <Image
          src="/phone.png"
          height={854}
          width={421}
          alt="Filippo Rivolta Employing Flutter"
        />
      </div>
    </>
  );
};
