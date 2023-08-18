import { Button } from "./MainStyles";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { storage } from "../../firebase";
import "./Form.css";
import {
  Modal,
  Overlay,
  Form,
  Content,
  Header,
  Heading,
  LabelTitle,
  InputTitle,
  LabelDescription,
  InputDescription,
  LabelImage,
  InputFile,
  InputImage,
  Close,
  Buttons,
  SaveBtn,
  CloseBtn,
} from "./FormStyles";

const FormModal = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    var image = data.image[0];
    storage
      .ref(`/images/${image.name}`)
      .put(image)
      .then(function(res){
        let url =
          "https://firebasestorage.googleapis.com/v0/b/services-f844e.appspot.com/o/images%2F";
        let image = url + res.ref.name + "?alt=media";
        data.image = image;
        props.services(data);
      });
    openServiceForm();
    reset();
  };

  const [modal, setModal] = useState(false);
  const openServiceForm = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <Button onClick={openServiceForm}>Add New Service</Button>
      {modal && (
        <Modal>
          <Overlay>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Header>
                <Heading>Create New Service</Heading>
                <Close onClick={openServiceForm}>+</Close>
              </Header>
              <Content>
                <LabelTitle htmlFor="title">Title*</LabelTitle>
                <InputTitle
                  placeholder="Post title"
                  type="text"
                  name="title"
                  {...register("title", { required: true, maxLength: 25 })}
                />
                {errors.title && errors.title.type === "required" && (
                  <span>This is required</span>
                )}
                {errors.title && errors.title.type === "maxLength" && (
                  <span>Max length exceeded</span>
                )}

                <LabelDescription htmlFor="description">
                  Description*
                </LabelDescription>
                <InputDescription
                  type="textarea"
                  name="description"
                  {...register("description", {
                    required: true,
                    maxLength: 100,
                  })}
                />
                {errors.description &&
                  errors.description.type === "required" && (
                    <span>This is required</span>
                  )}
                {errors.description &&
                  errors.description.type === "maxLength" && (
                    <span>Max length exceeded</span>
                  )}

                <LabelImage htmlFor="image">Image*</LabelImage>
                <InputFile
                  type="file"
                  id="image"
                  name="image"
                  accept="image/png, image/jpeg"
                  {...register("image", { required: true, maxLength: 1 })}
                ></InputFile>
                {errors.image && errors.image.type === "required" && (
                  <span>This is required</span>
                )}
                <InputImage type="image" src="" alt="" />
              </Content>
              <Buttons>
                <CloseBtn onClick={openServiceForm}>Close</CloseBtn>
                <SaveBtn>Save Changes</SaveBtn>
              </Buttons>
            </Form>
          </Overlay>
        </Modal>
      )}
    </>
  );
};

export default FormModal;
