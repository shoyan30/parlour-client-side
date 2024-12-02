// useServiceData.js
import { useState, useEffect } from 'react';

const useServiceData = (serviceId) => {
  const [serviceData, setServiceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/service/${serviceId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch service data');
        }
        const data = await response.json();
        setServiceData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceData();
  }, [serviceId]);

  return { serviceData, loading, error };
};

export default useServiceData;
