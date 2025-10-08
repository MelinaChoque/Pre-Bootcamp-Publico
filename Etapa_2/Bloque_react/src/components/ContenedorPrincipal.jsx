import styles from '../../src/css/contenedorPrincipal.module.css'

const ContenedorPrincipal = ({ children }) => {
    return (
        <div className={`p-5 w-75 h-75  ${styles.gris}`}>
            {children} 
        </div>
    )
}

export default ContenedorPrincipal;
