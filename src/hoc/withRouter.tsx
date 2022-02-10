import {useNavigate, useParams} from "react-router-dom";
import React, {ComponentType} from "react";

export function withRouter<T>(Component: ComponentType<T>) {
   return (props: any) => {
      let {userID} = useParams<string>();
      let navigate = useNavigate()
      return <Component {...props} userIdFromURL={userID} navigate={navigate}/>
   };
}

