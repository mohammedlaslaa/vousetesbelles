import Link from 'next/link'
import style from "./styles.scss"

function Home() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a className={style.anchor}>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/posts">
          <a>About Us</a>
        </Link>
      </li>
    </ul>
  )
}

export default Home