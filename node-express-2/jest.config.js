// convert a two-digit hour to its corresponding twelve-hour format
function format_hour(hour) {
    if (hour < 12) {
      return hour.toString() + ' am';
    } else {
      return hour.toString() + ' pm';
    }
  }
  
  // split the input string into an array of hour and minute
  function split_time(time) {
    const parts = time.split(':');
    return [parts[0], parts[1]];
  }
  
  // check if the input is a valid 24-hour time
  function is_24_hour_time(time) {
    return /^\d{2}:\d{2}$/.test(time);
  }
  
  function convert_time(time) {
    if (is_24_hour_time(time)) {
      const [hour, minute] = split_time(time);
      return format_hour(hour) + ' ' + minute;
    } else {
      return 'Invalid time format';
    }
  }