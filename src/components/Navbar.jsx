import logo from '../assets/parKing.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const paths = [
  {
    name: 'Reservations',
    children: [
      {
        name: 'User Reservations',
        link: '/reservation'
      },
      {
        name: 'Valet Reservations',
        link: '/valetReservation'
      }
    ]
  },
  {
    name: 'Account',
    link: '/user'
  },
  {
    name: 'Sign In',
    link: '/login'
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const userId = useSelector(state => state.accounts.userData.id);

  const toggleMenu = (e) => {
    e.preventDefault();
    setOpen(!open);
  }

  return (
    <div className='bg-black-s flex flex-row items-center'>
      <Link className='mr-auto p-1 ml-2' to='/'>
        <img width='100px' height='100px' src={logo}  alt='The company logo' />
      </Link>
      <div className='flex flex-row gap-x-4 items-center mr-2'>
          {
            paths.map(nav => {
              if (nav.children) {
                return (
                  <details key={nav.name} open={open} onClick={toggleMenu} className='relative'>
                    <summary className='text-xs text-beige-p hover:text-beige-s'>{nav.name}</summary>
                    <ul className='absolute bg-black-s mt-1'>
                    {
                      nav.children.map(link => {
                        return (
                          <li key={link.name} >
                            <Link to={link.link} className='p-4 rounded-t-none text-xs text-beige-p hover:text-beige-s whitespace-nowrap' >
                              {link.name}
                            </Link>
                          </li>
                        )
                      })
                    }
                    </ul>
                  </details>
                )
              } else {
                return (
                  <Link key={nav.name} to={nav.link === '/user' ? `/user/${userId}` : nav.link} className='text-xs text-beige-p hover:text-beige-s' >
                    {nav.name}
                  </Link>
                )
              }
            })
          }
      </div>
    </div>
  );
}

export default Navbar;