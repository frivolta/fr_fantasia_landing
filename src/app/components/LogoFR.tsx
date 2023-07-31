import Image from "next/image";
import Link from "next/link";

const LogoFr = () => (
  <div className="fixed bg-dark rounded-lg px-12 py-2">
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
