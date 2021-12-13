export const api = "https://localhost:44331/api/";

export const consulta = (url, data = null, method = null, callback, authorization = true) => {
  let parametros = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  if (method === 'patch') method = 'PATCH'
  if (method) parametros.method = method;
  if (authorization) parametros.headers.Authorization = `JWT ${localStorage.getItem('token')}`;
  if (data) parametros.body = JSON.stringify(data);

  fetch(`${api}/${url}`, parametros)
    .then(async response => {
      const estado = response.status;
      if (estado === 401) {
        window.location.href = "/sin_sesion";
      } else {
        const resp = await response.json();
        callback(null, estado, resp)
      }
    }).catch(error => callback(error));
}