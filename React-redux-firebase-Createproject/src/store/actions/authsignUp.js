const signUp=(newUser)=>{
  return (dispatch,getState,{getFirebase,getFirestore})=>{
    const firebase=getFirebase();
    const firestore=getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((resp)=>{
      return firestore.collection('users').doc(resp.user.uid).set(
        {
          firstName:newUser.firstname,
          lastname:newUser.lastname,
          initial:newUser.firstname[0]+newUser.lastname[0]
        }
      )
    }).then(()=>{
      dispatch({type:"SIGNUP_SUCCESS"})
    }).catch((err)=>{
      dispatch({type:"SIGNUP_ERROR",err})
    })
  }
}

export default signUp
