import axios from "axios";

export function fetchStatus(data){
  return function(dispatch){
   //axios.get('http://box.phys.devorch.com:8002/savestatus',{
    axios.get('http://localhost/test/test.php',{
          params:data
        })
        .then((response) =>{
          console.log(response);
          dispatch({type:'FETCH_STATUS_FETCHED', payload:response.data});
        })
        .catch((err) => {
          dispatch({type:'FETCH_STATUS_REJECTED',payload:err})
        })
  }
}

export function postStatus(data){
  console.log(data);
	return function(dispatch){
		axios.post('http://box.phys.devorch.com:8002/savestatus',data)
		.then(function (response) {
      
    		dispatch({type:'STATUS_UPDATED', payload:response.data.data});
		})
		.catch(function (error) {
      dispatch({type:'STATUS_NOT_UPDATED',payload:"Request not completed "});
		});
	}
}

