import Link from "next/link";

export default function NavBar() {
  return (
      <nav>
          <ul className='flex gap-2 justify-center sm:justify-between align-middle bg-orange-400 fixed w-full py-2 px-8'>
              <li>
                  <Link href='/' className='text-orange-800 hover:underline font-orbitron font-bold text-2xl'>Indie Gamer</Link>
              </li>
              <div className='sm:flex gap-4 hidden'>
                  <li><Link href='/reviews' className='text-orange-800 hover:underline font-semibold'>Reviews</Link></li>
                  <li><Link href='/about' className='text-orange-800 hover:underline font-semibold'>About</Link></li>
              </div>
          </ul>
      </nav>
  );
}