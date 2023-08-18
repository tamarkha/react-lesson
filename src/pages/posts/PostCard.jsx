import React from "react";
import {
  Card,
  CardInfo,
  CardDetails,
  CardTitle,
  CardDescription,
  CardImgSpace,
  Image,
  CardView,
  CardButton,
} from "./PostStyles";

const PostCard = (props) => {
  return (
    <>
      <Card key={props.data.id}>
        <CardInfo>
          <CardImgSpace>
            <Image src={props.data.image}></Image>
          </CardImgSpace>
          <CardDetails>
            <CardTitle>{props.data.title}</CardTitle>
            <CardDescription>{props.data.description}</CardDescription>
          </CardDetails>
        </CardInfo>
        <CardView>
          <CardButton onClick={() => props.handlerPopup(props.data)}>
            View Post
          </CardButton>
        </CardView>
      </Card>
    </>
  );
};

export default PostCard;
