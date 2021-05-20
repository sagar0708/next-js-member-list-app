import Link from 'next/link'

const Navbar = () => {
  return ( 
    <nav>
      <div className="logo">
        Logo
      </div>
      <div className="name-list">
        <Link href="/"><a>Home</a></Link>
        <Link href="/members"><a>Members</a></Link>
      </div>
    </nav>
   );
}
 
export default Navbar;