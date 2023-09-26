const strContains = (str, searchString) => {
  if(str.toLowerCase().includes(searchString.toLowerCase()))
    return true;
  else
    return false;
}

export default strContains;