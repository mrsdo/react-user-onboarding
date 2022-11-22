/*  function to fetch the API
*   Workflow: When we add '/api/{getRoutesTest}' to URL, the 'Hello World' will change to message added in "../controllers/controller-test.js"
*   message:'Test API successful'
*   Requirements: State, useEffect().  A Hook (to fetch the API).  These have been added to "../App.jsx".
* */
/*
EXAMPLE:
const fetchAPI = async () => {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }*/

export const getRoutesTest = async () => {
    try {
        const res = await fetch('http://localhost:8080/test', {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }); //Uses JavaScript, but npm AXIOS can also be used.

        return await res.json(); //returns the response as json

    } catch (err) {
       // console.log(err);
    }
};