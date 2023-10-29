export default function obtenerId(token) {
  //separo las tres partes del token divididas por el '.'
  const datosToken = token.split('.')[1];
  //convierto en objeto el string obtenido decodificando la parte central del token.
  //atob() decodifica una cadena de datos que ha sido codificada usando la codificación en base 64.
  const datosTokenJson = JSON.parse(atob(datosToken))
  
  return datosTokenJson ; //devuelvo el objeto
}