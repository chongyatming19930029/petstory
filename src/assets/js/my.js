const $_QueryToObj = query => {
  if( typeof query != 'string' ) return undefined;
  let obj = {}
  query.match(/.+[^&]/i)[0].split("&").forEach( item => {
    const [ key, value ] = item.split("=");
    obj[key] === undefined ? obj[key] =  value : obj[key] = [].concat( obj[key], value );
  } );
  return obj;
};

const $_ObjToQuery = obj => {
  if ( obj == {} ) return "";
  let str = "";
  for ( let key in obj ) {
    obj[key].constructor == Array ? 
      str += `${key}=` + obj[key].join(`&${key}=`) + "&": 
      str += `${key}=${obj[key]}&`;
  };
  return str.match(/.+[^&]/i)[0]
};

export {
  $_QueryToObj,
  $_ObjToQuery
};
