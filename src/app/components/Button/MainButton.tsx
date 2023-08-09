import MainButtonStyle from "./MainButton.module.scss";
import Image from "next/image";
import classNames from "classnames";
export interface MainButtonProps {
  text: string;
  iconUrl: string;
  alt?: boolean;
  href: string;
}

const MainButton = ({ text, iconUrl, alt, href }: MainButtonProps) => {
  //if alt prop false then classname is MainButtonPrimary
  //if alt prop true then classname is MainButtonSecondary
  // always MainButton
  const className = classNames({
    [MainButtonStyle.MainButton]: true,
    "flex justify-center align-middle": true,
    [MainButtonStyle.MainButtonPrimary]: !alt,
    [MainButtonStyle.MainButtonSecondary]: alt,
  });
  return (
    <a className={className} href={href} target="_blank">
      <Image
        src={iconUrl}
        width={20}
        height={0}
        className="h-auto"
        alt={"Filippo Rivolta " + text}
      />
      {text}
    </a>
  );
};
export default MainButton;
