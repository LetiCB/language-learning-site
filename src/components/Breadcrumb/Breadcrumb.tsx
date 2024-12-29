import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BreadcrumbContainer } from './Breadcrumb.styles';

const Breadcrumb: React.FC = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x && x !== "learn");
  
    return (
      <BreadcrumbContainer aria-label="breadcrumb">
        <ol>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          {pathnames.map((value, index) => {
          const decodedValue = decodeURIComponent(value.replace(/-/g, " "));
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <li key={to}>
              <Link to={to}>{decodedValue}</Link>
            </li>
            );
          })}
        </ol>
      </BreadcrumbContainer>
    );
  };

export default Breadcrumb;
