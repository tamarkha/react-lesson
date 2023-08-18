import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Header,
  List,
  Item,
  Link,
  Content,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Container>
      <Content>
        <Row>
          <Col>
            <Header> Contact</Header>
            <List>
              <Item>
                <Link to="#">
                  <FaTwitter></FaTwitter>
                </Link>
              </Item>
              <Item>
                <Link to="#">
                  <FaLinkedin></FaLinkedin>
                </Link>
              </Item>
              <Item>
                <Link to="#">
                  <FaFacebook></FaFacebook>
                </Link>
              </Item>
            </List>
          </Col>
        </Row>
        <p>Copyright &copy; Tamar Khadilashvili</p>
      </Content>
    </Container>
  );
};

export default Footer;
