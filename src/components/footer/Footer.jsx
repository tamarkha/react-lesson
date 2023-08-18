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
                <Link to="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D">
                  <FaTwitter></FaTwitter>
                </Link>
              </Item>
              <Item>
                <Link to="https://www.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F">
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
