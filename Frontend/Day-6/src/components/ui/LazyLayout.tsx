import React, { Suspense, ReactElement } from 'react';
// import PropTypes from 'prop-types';
// import Loader from './Loader';

interface LazyLayoutProps {
  component: React.ComponentType<any>; // Use React.ComponentType instead
}

const LazyLayout: React.FC<LazyLayoutProps> = ({ component: Component, ...rest }) => {
  return (
    <Suspense fallback="loading...">
      <Component {...rest} />
    </Suspense>
  );
};

// LazyLayout.propTypes = {
//   component: PropTypes.func.isRequired, // Use PropTypes.func instead
// };

export default LazyLayout;
