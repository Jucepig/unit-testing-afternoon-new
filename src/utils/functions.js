export const shortenText = text => {
    // let shortened = text.substr(0, 100).trim();
    // shortened.length === 100 && (shortened += '...');
    if(text.trim().length >=100 && text.length !== 100) {
      return `${text.substring(0,100).trim()}...`
    }
    return text;
  };
  