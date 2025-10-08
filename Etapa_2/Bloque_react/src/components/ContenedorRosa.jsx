import styles from '../../src/css/contenedorRosa.module.css';

const ContenedorRosa = ({ children }) => {
  return (
    <div className={`d-flex flex-column mb-3 mt-3  ${styles.rosa}`}>
      {children}
    </div>
  );
};

export default ContenedorRosa;
