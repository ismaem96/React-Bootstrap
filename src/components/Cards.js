import React from "react";
import Card from "./Card";
import image1 from "../assets/az.png";
import image2 from "../assets/apple.jpeg";
import image3 from "../assets/lever.png";

const cards = [
  {
    id: 1,
    title: "Javascript",
    image: image1,
    instructor: "Humberto Dorantes",
    url: "http://google.com"
  },
  {
    id: 2,
    title: "Python",
    image: image2,
    instructor: "Samuel Lopez",
    url: "http://youtube.com"
  },
  {
    id: 3,
    title: "Java",
    image: image3,
    instructor: "Angela Rios",
    url: "http://gitlab.com"
  },
];

export default function Cards() {
  return (
    <div className="container d-flex justify-content-center align-item-center h-100">
      <div className="row">
        {cards.map((c) => (
          <div className="col-md-4" key={cards.id}>
            <Card
              key={c.id}
              id={c.id}
              title={c.title}
              image={c.image}
              instructor={c.instructor}
              url={c.url}
            ></Card>
          </div>
        ))}
      </div>
    </div>
  );
}
