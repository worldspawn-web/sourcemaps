import styles from './Container.module.scss';

interface ContainerHeader {
  children: React.ReactNode;
}

export const ContainerHeader: React.FC<ContainerHeader> = ({ children }) => {
  return <h1 className={styles.container__header}>{children}</h1>;
};
