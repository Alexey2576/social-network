import {Typography} from 'antd';
import React from "react";

const { Paragraph } = Typography;

export const Home = () => {
   return (
      <div style={{
         display: "flex",
         flexDirection: "column",
         alignItems: "start",
         justifyContent: "left",
         width: "60%"
      }}>
         <Typography.Title
            level={1}
            style={{
               marginBottom: "20px",
               color: "blue",
               fontWeight: "bold",
               fontSize: "50px"
            }}
         >
            Social network
         </Typography.Title>

         <Paragraph style={{
            fontSize: "20px",
            width: "60%",
         }}>
            Social network помогает вам всегда оставаться на связи и общаться со своими знакомыми.
         </Paragraph>
      </div>
   )
}