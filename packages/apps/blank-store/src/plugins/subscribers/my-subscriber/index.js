export default ({endpoint, getState, subscribeDispatch}) => {
    // Get value form the selector
    // const someValueFromTheState = someSelector(getState());
   return subscribeDispatch = (action, state) => {
    // const {type} = action;
    // Track getState action
   if (type === 'getState') {
    // Add connections to other independent endpoints
    // endpoint ('someEndpointName', somePayload, state);
   }
   else if (type === 'myOtherAction') {
   // Track myOtherAction action
   }
   };
}