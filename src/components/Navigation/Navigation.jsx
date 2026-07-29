import './navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX} from '@fortawesome/free-solid-svg-icons';
import iconeLogo from '../../assets/images/logos/pizza-icone.png';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {
  const navRef = useRef();
  const navOverlay = useRef();

  const showNavbar = () => {
    navRef.current.classList.add('show_menu');
    navOverlay.current.classList.toggle('show_overlay');
  }

  const closeNavbar = () => {
    navRef.current.classList.remove('show_menu');
    navOverlay.current.classList.remove('show_overlay');
  }

  const navbarLinks = () => {
    navRef.current.classList.remove('show_menu');
    navOverlay.current.classList.remove('show_overlay');
  }

    return (
      <>
      <div className='navigation-overlay fixed top-0 left-0 w-full h-screen bg-slate-700/50 z-[50]' ref={navOverlay}></div>
      <header className='w-full fixed top-0 left-1/2 -translate-x-1/2 bg-transparent p-[13px] duration-300 z-[50] max-[785px]:left-0 max-[785px]:translate-x-0'>
        <nav className='flex justify-between items-center px-10 max-w-7xl mx-auto duration-500 max-md:px-2 max-lg:px-4'>
          <a href='/'>
            <div className='flex items-center'>
              <img src={iconeLogo} alt='Ícone da logo' className='size-12 mr-2 max-[350px]:size-10' />
              <h3 className='logo flex gap-1 text-2xl text-white font-staatliches tracking-wider duration-300 max-[350px]:text-lg'>Pizzaria do <span className='text-white font-staatliches'>Sabor</span></h3>
            </div>
          </a>
          <div className='navigation menu duration-500 leading-10' ref={navRef}>
            <div className='logo-menu hidden absolute top-5 max-[780px]:flex max-[780px]:items-center max-[785px]:gap-1'>
              <img src={iconeLogo} alt='Ícone da logo' className='size-12 mr-2 max-[350px]:size-10' />
              <h3 className='logo flex gap-1 text-2xl text-white font-staatliches tracking-wider duration-300 max-[350px]:text-lg'>Pizzaria do <span className='text-white font-staatliches'>Sabor</span></h3>
          </div>
          <ul className='navlinks flex items-start gap-7'>
            <li className='navbar-links'>
              <NavLink to='/' className={({ isActive }) => "nav-links navlink" + (isActive ? ' active' : '')} reloadDocument>Início</NavLink>
            </li>
              <li className="navbar-links">
                <NavLink to="/cardapio" onClick={navbarLinks} reloadDocument className='navlink'>Menu</NavLink>
              </li>
              <li className="navbar-links">
                <HashLink to="/#combos" onClick={navbarLinks} className='navlink'>Combos</HashLink>
              </li>
              <li className="navbar-links">
                <HashLink to="/#sobre" onClick={navbarLinks} className='navlink'>Sobre</HashLink>
              </li>
              <li className='navbar-links'>
                <HashLink to="/#contatos" onClick={navbarLinks} className='navlink'>Contatos</HashLink>
              </li>
              <li className='navbar-links'>
                <HashLink to="/#avaliacoes" onClick={navbarLinks} className='navlink'>Avaliações</HashLink>
              </li>
              <div className='nav-btn nav-close-btn text-slate-950 text-xl cursor-pointer hidden max-[780px]:block max-[780px]:absolute max-[780px]:top-5 max-[780px]:right-5'>
                <FontAwesomeIcon icon={faX} onClick={closeNavbar} />
              </div>
            </ul>
          </div>
          <div className='nav-btn nav-icon-menu text-slate-950 text-2xl cursor-pointer hidden max-[780px]:block'>
            <FontAwesomeIcon icon={faBars} onClick={showNavbar} />
          </div>
        </nav>
      </header>
      </>
    );
  }

export default Navigation;

window.addEventListener('scroll', () => {
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});
