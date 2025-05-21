// components/NavBar.js
import Link from 'next/link';

/*
NavBar function/object, direct users to the homepage when logo is clicked.
*/
export default function NavBar() {
    return (
        /* width: fullscreen, height: 15, shadow: small, background:white */
        <nav className='fixed w-full h-18 shadow-sm bg-white justify-between'>
            {/* padding: 4 */}
            <div className='p-5'>
                <Link className="font-sans text-blue-400 font-bold text-2xl" href="/">DigitalNEST Shop</Link>
            </div>
        </nav>
    );
}