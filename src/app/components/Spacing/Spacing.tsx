import styles from "./Spacing.module.scss";
interface SpacingProps {
  children: React.ReactNode;
}
export const Spacing = ({ children }: SpacingProps) => {
  return <div className={styles.Spacing}>{children}</div>;
};
