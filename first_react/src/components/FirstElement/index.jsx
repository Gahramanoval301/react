import styles from './index.module.css'
const FirstElement = ({ad, soyad}) => {
  return (
    <>
    <div className={styles.header}>{ad} {soyad}</div>
    </>
  )
}
export default FirstElement
