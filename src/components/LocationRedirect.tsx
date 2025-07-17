import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LocationRedirect = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle location-based redirects
    const path = location.pathname;
    
    // If someone visits a location page that should be static HTML
    if (path.includes('/locations/')) {
      const locationPage = path.replace('/locations/', '');
      if (locationPage.endsWith('.html')) {
        // Redirect to the static HTML page
        window.location.href = `/locations/${locationPage}`;
        return;
      }
    }
  }, [location]);

  return null;
};

export default LocationRedirect;