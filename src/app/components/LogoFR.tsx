import Image from "next/image";
import Link from "next/link";

const LogoFr = () => (
  <Link href="/">
    <Image
      src={"LogoFr.svg"}
      alt="Filippo Rivolta Full Stack Developer"
      width={56}
      height={56}
    />
  </Link>
);
export default LogoFr;
