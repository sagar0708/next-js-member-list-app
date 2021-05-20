import Head from 'next/head'
import Link from 'next/link'
import style from '../../styles/Members.module.css'

export const getStaticProps = async ()=> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  return{
    props : { users: data }
  }
}

const Members = ( {users} ) => {
  return ( 
    <>
    <Head>
      <title>Users Page</title>
    </Head>
      <div className="members">
        {users.map(user => (
          <Link href={'/members/' + user.id} key={user.id}>
            <a className={style.link}>
              <h3>
                {user.name}
              </h3>
            </a>
          </Link>
        ))}
      </div>
    </>
   );
}
 
export default Members;