import { showError } from '../../components/toasters';
import axios from '../config/axios.config';

export const postData = async (url, data, params = {}) => {
    try {
      const response = await axios.post(url, data, params);
      return response.data;
    } catch (error) {
      // throw error;
      return errorHandler(error);
    }
  };
  export const getData = async (url, params = {}) => {
    try {
      const response = await axios.get(url, { params: { ...params } });
      console.log(response,'data from getapi');
      return response;
    } catch (error) {
      console.log(error);
      // return errorHandler(error);
    }
  };
  export const putData = async (url, data, params = {}) => {
    try {
      const response = await axios.put(url, data, { params });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  };
  export const patchData = async (url, data, params = {}) => {
    try {
      // const headers = getHeaders();
      const response = await axios.patch(url, data, { params });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  };
  export const deleteData = async (url, params = {}) => {
    try {
      const response = await axios.delete(url, { params }); 
      
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  };
  
  // export const errorHandler = (error) => {
  //   let message = "An unknown error occurred.";
  //   if (error.response) {
  //     const res = error.response.data;
  
  //     if (error.response.status === 401) {
  //       // alert(" Please log in again.");
  //       showError(res.message);
  //     } else {
  //       // alert("Something went wrong. Please try again later.");
  //       showError(res.message);
  //     }
  //     if (res) {
  //       message = res.message || res.metadata?.message || message;
  //     } else {
  //       message = JSON.stringify(res);
  //     }
  //   } else if (error?.message) {
  //     message = error.message;
  //     // alert(message);
  //     showError(message);
  //   }
  //   return { error: message };
  // };

  export const errorHandler = (error) => {
  let message = "An unknown error occurred.";

  if (error.response) {
    const res = error.response.data;

    if (res?.message) {
      message = res.message;
    } else if (res?.metadata?.message) {
      message = res.metadata.message;
    }

    showError(message);

    console.error("API Error:", error.response.status, message);

  } else if (error.request) {
    message = "Network error — server not responding.";
    showError(message);
    console.error("Network Error:", error);
  } else {
    message = error.message || message;
    showError(message);
    console.error("Unexpected Error:", error);
  }

   return { success: false, message };
};
