import CardInfo from "../home/CardInfo/CardInfo";
import ImgProfile from "../home/ImgProfile/ImgProfile";
import InfoProfile from "../home/InfoProfile/InfoProfile";
import Typewriter from "../home/Typewriter/Typewriter";
import styles from "./BentoContainer.module.css";

export const BentoContainer: React.FC = () => {
    return(
       
       <> <div className={styles.background} >       </div>


        <div className={`${styles.grid}`}>
        <div className={`${styles.item0} ${styles.item}`}>
        <ImgProfile/>        </div>
          
        <div className={`${styles.item1} ${styles.item}`}>
                        <Typewriter />

        </div>
        <div className={`${styles.item2} ${styles.item}`}>
            <InfoProfile/>
        </div>
          
        <div className={`${styles.item3} ${styles.item}`}>
            <CardInfo title="Software" 
            description="Aqui podras encontras lo relaciondo con el desarollo de software"
            imageSrc="/CardInfo/Software.webp"/>
        </div>
        <div className={`${styles.item4} ${styles.item}`}>
        <CardInfo title="Ciencia" 
            description="Aqui podras encontras lo relaciondo con la investigación"
            imageSrc="/CardInfo/Ciencia.webp"/>
        </div>
        <div className={`${styles.item5} ${styles.item}`}>
        <CardInfo title="Blog" 
            description="Un poco de divulgación de contenido"
            imageSrc="/CardInfo/Blog.webp"/>
            </div>    
      </div>  
      </>
      )
}

export default BentoContainer;