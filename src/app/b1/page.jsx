'use client'
import styles from './b1.module.css'
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link';




function B1(){




   return(
      <>
         <div className={styles.container}>
            <Link href='/words' className={styles.backHolder}>
               <IoIosArrowBack className={styles.backSign}/>
               <div className={styles.backText}>Back</div>
            </Link>

            <div className={styles.learningHolder}>

            </div>
         </div>
      </>
   )
}

export default B1;