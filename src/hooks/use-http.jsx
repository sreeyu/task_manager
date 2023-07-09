import React, { useState } from "react";

function useHttp(requestConfig, getData){

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async() => {

    setLoading(true);
    setError(null);

    try{
      const response = await fetch(
        requestConfig.url, {
            method: requestConfig.method ? requestConfig.method : 'GET',
            headers: requestConfig.headers ? requestConfig.headers : {},
            body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
        }
      );
  
      if(!response.ok){
        throw new Error('Request failed!');
      }
  
      const data = await response.json();

      getData(data);
     
    } catch (err){
      setError(err.message || 'Something went wrong!')
    }
    setLoading(false);
  };

  return {
    loading,
    error,
    sendRequest
  }
};

export default useHttp;