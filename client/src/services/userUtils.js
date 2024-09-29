/**
 * Provides the appropriate image URL based on user photoURL or initials
 * @param {string|null} photoURL - User's profile picture URL
 * @param {string|null} displayName - User's full name
 * @returns {string} - The appropriate image URL
 */
export const getAltImage = (photoURL, displayName) => {
    if (photoURL) {
      return photoURL;
    }
  
    const name = displayName || 'User';
  
    // Get initials from the user's name
    const nameArray = name.trim().split(' ');
  
    // If there's only one word in the name, take the first letter of it
    const initials = nameArray.length === 1 
      ? nameArray[0].charAt(0).toUpperCase() 
      : nameArray[0].charAt(0).toUpperCase() + nameArray[1].charAt(0).toUpperCase();
  
    // Return the placeholder image URL with the initials
    return `https://placehold.co/40/green/white/?text=${encodeURIComponent(initials)}&font=roboto`;
  };
  