// src/utils/dateFormatter.js

/**
 * Converts an ISO timestamp into a human-readable format.
 * @param {string} dateString - The raw ISO date string.
 * @param {string} type - Preset type: 'short', 'long', or 'full'.
 * @returns {string} - Formatted date string.
 */
export const formatDate = (dateString, type = 'long') => {
  if (!dateString) return '';

  const date = new Date(dateString);

  // Check if date is valid to prevent "Invalid Date" errors
  if (isNaN(date.getTime())) return 'Invalid Date';

  const options = {
    short: { month: 'numeric', day: 'numeric', year: 'numeric' },
    long: { month: 'short', day: 'numeric', year: 'numeric' },
    full: { 
        weekday: 'long', 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    },
  };

  return new Intl.DateTimeFormat('en-US', options[type] || options.long).format(date);
};