import { useState } from "react";
import Link from "../Links/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
const NavBar = () => {
    const [open , setOpen] = useState(false);
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
    ];

    return (
        <nav>

          <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
            {
                open === true ? <RxCross1></RxCross1> : <RiMenu2Fill></RiMenu2Fill>
            }
            
          </div> 

            <ul className={`md:flex absolute duration-1000  md:static px-6 ${open ? 'top-16' : '-top-60'}`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>

        </nav>
    );
};

export default NavBar;