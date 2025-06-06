import { Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
const routes = [
  { path: '/', breadcrumb: 'Home' },
  { path: '/about', breadcrumb: 'About Us' },
  { path: '/dentists', breadcrumb: 'Dentists' }, 
  { path: '/services', breadcrumb: 'Services' },

 
];

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <div className="breadcrumbs">
      {breadcrumbs.map(({ match, breadcrumb }, index) => (
        <span key={match.pathname}>
          <Link to={match.pathname}>{breadcrumb}</Link>
          {index < breadcrumbs.length - 1 && ' / '}
        </span>
      ))}
    </div>
  );
};


export default Breadcrumbs;