import React from "react";
import { useEffect, useState } from "react";
import Banner from "./Banner";
import PostModal from "./PostModal";
import { Container, HeaderText, Content } from "./PostStyles";
import PostCard from "./PostCard";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [newPost, setNewPost] = useState();

  useEffect(() => {
    fetch(
      "https://api.npoint.io/44c1c313d40c0811ad19?fbclid=IwAR1ghPZYf9Jz13-DNSFMx3u9NSvg755XlHUd9ls8WtpVsq3KbY2NmxP-sKA"
    )
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const HandlerPopup = (post) => {
    setNewPost(post);
    setModal(post);
  };

  const closeModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <Banner></Banner>
      <HeaderText>
        Find the latest breaking news and information below.
      </HeaderText>
      <Container>
        {posts.map((post, index) => {
          return (
            <PostCard
              key={index}
              data={post}
              handlerPopup={() => HandlerPopup(post)}
            ></PostCard>
          );
        })}
        <Content>
          <PostModal
            data={newPost}
            onClose={() => closeModal()}
            show={modal}
          ></PostModal>
        </Content>
      </Container>
    </>
  );
};

export default Posts;
