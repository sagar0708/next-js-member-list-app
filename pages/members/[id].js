import style from '../../styles/User.module.css'
import Link from 'next/link'

export const getStaticPaths = async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  const paths = data.map(user => {
    return {
      params : { id: user.id.toString() }
    }
  })
  return{
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
  const data = await res.json()
  return{
    props: {user: data}
  }
}

const UserDetail = ({user}) => {
  return ( 
    <>
    <div className={style.detail}>
      <h2 className={style.username}>{user.name}</h2>
      <h3 className={style.email}>{user.email}</h3>
      <p className={style.website}>{user.website}</p>
      <Link href="/members"><a className={style.btn}>Go to Member List</a></Link>
    </div>
    </>
   );
}
 
export default UserDetail;