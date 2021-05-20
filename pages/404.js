import Link from 'next/link'
import {useEffect} from 'react'
import {useRouter} from 'next/router'

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000)
  }, [])
  return ( 
    <div className="not-found">
      <h1>Ooooooops.........!</h1>
      <h2>Page that you trying to search is not found</h2>
      <Link href="/"><a>Back to Home</a></Link>
    </div>
   );
}
 
export default NotFound;