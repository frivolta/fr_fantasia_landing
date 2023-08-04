import Image from "next/image";
import Link from "next/link";

const LogoFr = () => (
  <div className="fixed md:relative bg-dark md:bg-transparent rounded-lg px-12 md:px-0 py-2 md:py-0 z-10">
    <Link href="/">
      <Image
        src={"LogoFr.svg"}
        alt="Filippo Rivolta Full Stack Developer"
        width={48}
        height={48}
      />
    </Link>
  </div>
);
export default LogoFr;
