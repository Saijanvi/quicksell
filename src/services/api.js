export const fetchData = async () => {
    const url = 'https://api.quicksell.co/v1/internal/frontend-assignment';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
  
      const data = await response.json();
      const { tickets, users } = data; 
  
      return { tickets, users };
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  
  
