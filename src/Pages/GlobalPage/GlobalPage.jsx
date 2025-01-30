import { Hero } from 'components/Hero/Hero';
import { Stats } from 'components/Stats/Stats';
import { Reviews } from 'components/Reviews/Reviews';
import { Partners } from 'components/Partners/Partners';
import { Geos } from 'components/Geos/Geos';
import { Vacancies } from 'components/Vacancies/Vacancies';
import { Contacts } from 'components/Contacts/Contacts';
import { Conferences } from 'components/Conferences/Conferences';

export const GlobalPage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Reviews />
      <Partners />
      <Geos />
      <Vacancies />
      <Contacts />
      <Conferences />
    </>
  );
};
