export default function reducer(state={
	status:{},
	statusList:{},
	fetching: false,
	fetched: false,
	error: null
},action){
	switch(action.type){
		case "STATUS_UPDATING":{
			return {...state,fetching:true};
		}
		case "STATUS_UPDATED":{
			return {...state,fetched:true,fetching:true,status:action.payload};
		}
		case "STATUS_NOT_UPDATED":{
			return {...state,fetched:true,fetching:false,error:action.payload};
		}
		case "FETCH_STATUS_FETCHED":{

			return {...state,fetched:true,fetching:true,statusList:action.payload};
		}
		case "FETCH_STATUS_REJECTED":{
			return {...state,fetched:true,fetching:false,error:action.payload};
		}
	}
	return state;
}
