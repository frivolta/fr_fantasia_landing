import MainButtonStyle from "./MainButton.module.scss";
import Image from "next/image";

export interface MainButtonProps {
  text: string;
  iconUrl: string;
}

const MainButton = ({ text, iconUrl }: MainButtonProps) => {
  return (
    <a
      className={`${MainButtonStyle.MainButton} ${MainButtonStyle.MainButtonPrimary} flex justify-center align-middle`}
    >
      <Image
        src={iconUrl}
        width={20}
        height={0}
        className="h-auto "
        alt={"Filippo Rivolta " + text}
      />
      {text}
    </a>
  );
};
export default MainButton;
