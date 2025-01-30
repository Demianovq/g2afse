import { Outlet } from 'react-router-dom';
import { Nav } from '../Nav/Nav';
import { Container } from 'components/Container/Container.styled';

export const Layout = () => {
  return (
    <>
      <nav>
        <Container>
          <Nav />
        </Container>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
