import axios from 'axios';
const baseUrl = `${process.env.REACT_APP_DESTINY_API}/api`;

export const getAllDestinies = () => {
    return axios.get(`${baseUrl}/destiny`);
};

export const getDestiny = (id) => {
    return axios.get(`${baseUrl}/destiny/${id}`);
};

export const deleteDestiny =(id) => {
    return axios.delete(`${baseUrl}/destiny/${id}`);
}


export const addDestiny = (project) => {
    return axios.post(`${baseUrl}/destiny`, project,{withCredentials: true} );
};
export const updateDestiny = (updatedDestiny) => {
    return axios.put(`${baseUrl}/destiny/${updatedDestiny._id}`, updatedDestiny);
  }

export const uploadFile = (uploadData) => {
    return axios.post(`${baseUrl}/upload`, uploadData);
};

/* Authentication Routes*/

export const signup =(newUser) =>{
    return axios.post(`${baseUrl}/signup`,newUser);
};

export const login = (username, password) => {
    return axios.post(`${baseUrl}/login`,{username,password}, { withCredentials: true});
};

export const logout = () => {
    return axios.post(`${baseUrl}/logout`, null, {withCredentials: true});
  }
  export const loggedin = () => {
    return axios.get(`${baseUrl}/loggedin`, {withCredentials: true});
  }

  export const searchDestiny = () =>{
      return axios.post(`${baseUrl}/search`); 
  }
  export const allCities = () =>{
      return axios.get(`${baseUrl}/allcities`); 
  }