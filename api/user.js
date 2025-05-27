import auth from '@react-native-firebase/auth';
import store from '../Redux/Store';
import { updateToken } from '../Redux/Reducers/User';

export const createUser = async (fullName , email , password) => {
    try{
        const user = await auth().createUserWithEmailAndPassword(email , password);
        await user.user.updateProfile({displayName : fullName});
        await user.user.reload();
        // console.log(user);
    }
   catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return {error: 'That email is already exists'};
    } else if (error.code === 'auth/invalid-email') {
      return {error: 'Please enter a valid email-address'};
    } else {
      return {error: 'Something went wrong'};
    }
}
};

export const loginUser = async (email , password) => {
  try{
    const response = await auth().signInWithEmailAndPassword(email , password);
    const token = await response.user.getIdToken();
    return {
    status : true,
    data : {
      displayName : response.user.displayName,
      email : response.user.email,
      token,
      },
    };
  }
  catch(error){
    if(error.code === 'auth/invalid-credential'){
      return {status : false , error : 'Please enter a valid email-address or password' };
  }
  else if(error.code === 'auth/too-many-requests'){
      return {status : false , error : 'Too many requests please try again later' };
  }
  else if(error.code === 'auth/network-request-failed'){
      return {status : false , error : 'Please check your internet connection' };
  }
  console.log('yo',error.message);
}
};

export const logOut = async () =>{
  await auth().signOut();
};

export const checkToken = async () => {
  try{
  let response = await auth().currentUser.getIdToken(true);
  console.log('we are updating token');
  store.dispatch(updateToken(response));
  console.log(response);
  return response;
}catch(error){
    return error;
  }
};
