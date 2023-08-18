import React from "react";
import { useState, useEffect } from "react";
import FormModal from "./FormModal";
import { ServiceCard } from "./ServiceCard";
import Servicelist from "./ServiceList.json";
import "./Form.css";
import { Container, Content, HeaderText } from "./MainStyles";
import { Banner } from "./BannerStyles";
import Banners from "./Banner";

const Services = () => {
  const [services, setService] = useState(Servicelist);

  const addService = (item) => {
    setService(() => {
      return [...services, item];
    });
  };
  return (
    <>
      <Banners></Banners>
      <Container>
        <Content>
          {services.map((service, index) => {
            return (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
              ></ServiceCard>
            );
          })}
        </Content>
        <FormModal services={addService}></FormModal>
      </Container>
    </>
  );
};

export default Services;
