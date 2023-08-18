import React from "react";
import { useEffect, useState } from "react";
import {
  Modal,
  Overlay,
  Box,
  Content,
  Header,
  Heading,
  Close,
  Img,
  Description,
} from "./PostStyles";

const PostModal = (props) => {
  return (
    <div>
      {props.show && (
        <Modal>
          <Overlay>
            <Box>
              <Header>
                <Heading>{props.data.title}</Heading>
                <Close onClick={props.onClose}>+</Close>
              </Header>
              <Content>
                <Img src={props.data.image}></Img>
                <Description>{props.data.description}</Description>
              </Content>
            </Box>
          </Overlay>
        </Modal>
      )}
    </div>
  );
};

export default PostModal;
