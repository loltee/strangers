import App from "../App";

const getUserProfile = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/users/me`, {
          method: 'GET',
          headers: {
    'Authorization': `Bearer ${accessToken}`
          }
        });
  
      if (response.status === 200) {
        const userProfile = await response.json();
        console.log('User Profile:', userProfile);
      } else {
        console.log('Error getting user profile:', response.status);
        // Handle error response
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };
  
  // Call the getUserProfile function
  getUserProfile();