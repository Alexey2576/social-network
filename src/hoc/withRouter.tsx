import {useParams} from "react-router-dom";
import React from "react";

export const withRouter = (Component: any) => {
   return (props: any) => {
      let {userID} = useParams<string>();
      return <Component {...props} userID={userID}/>
   };
}

