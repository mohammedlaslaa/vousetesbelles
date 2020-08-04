import style from "./styles.scss"
import Link from "next/link"

function Posts() {
  return (
    <div className={style.example}>
        posts !
        <Link href='/'>
          <a >return home</a>
        </Link>
    </div>
  )
}

export default Posts
