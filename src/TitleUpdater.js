// TitleUpdater.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    // Update the title based on the current location
    const pageTitle = getPageTitle(location.pathname);
    document.title = pageTitle;
  }, [location]); // Update whenever location changes

  // Function to get the page title based on the pathname
  const getPageTitle = (pathname) => {
    switch (pathname) {
      case '/':
        return 'Home Page - Galaxy';
      case '/about':
        return 'About Us - Galaxy';
      default:
        return 'Galaxy';
    }
  };

  return null; // This component doesn't render anything in the DOM
}

export default TitleUpdater;
