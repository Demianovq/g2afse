import { Outlet } from 'react-router-dom';
import { Nav } from '../Nav/Nav';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import { MobNav } from 'components/Nav/MobNav';
import { Footer } from 'components/Footer/Footer';
import { Container } from 'components/Container/Container.styled';

export const Layout = () => {
  return (
    <>
      <nav>
        <BurgerMenu />
        <MobNav />
        <Container>
          <Nav />
        </Container>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <Container>
          <Footer />
        </Container>
      </footer>
    </>
  );
};
