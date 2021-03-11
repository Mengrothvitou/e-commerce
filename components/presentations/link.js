export default ActiveLink
import { useRouter } from 'next/router'

function ActiveLink(props) {
  const router = useRouter()
  const style = {
    marginRight: 10,
    color: 'black',
    textDecoration: router.pathname === props.href ? "underline":"none",
  }
  const handleClick = (e) => {
    e.preventDefault()
    router.push(props.href)
  }
  return (
    <div>
      <a href={props.href} onClick={handleClick} style={style}>
        {props.nav}
      </a>
    </div>
  )
}
