import {
  Card,
  CardInfo,
  CardTitle,
  CardDescription,
  CardImgSpace,
  Image,
} from "./MainStyles";

export const ServiceCard = (props) => {
  return (
    <Card key={props.id}>
      <CardInfo>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardInfo>
      <CardImgSpace>
        <Image src={props.image}></Image>
      </CardImgSpace>
    </Card>
  );
};
