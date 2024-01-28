export function dateTime(input) {
    const dateTime = new Date(input);
    const formattedDateTime = new Intl.DateTimeFormat('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric' /*,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false */
    }).format(dateTime);
  
    return (formattedDateTime)
  }