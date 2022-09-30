import { React, useState } from "react";
import Invest from "./subcomponents/Invest";
import Currently from "./subcomponents/Currently";
import cover from "./utils/Cover.jpg";
import bell from "./utils/bell.svg";
import mail from "./utils/mail.svg";
import profile from "./utils/Profile.jpg";

const Content = () => {
  const cardlist = [
    {
      image: cover,
      title: "Uber eats",
      content:
        "Uber Eats is an online food ordering and delivery platform launched by Uber in 2014.",
      btn1: "FINTECH",
      profile: profile,
      btn2: "HEALTH",
    },
    {
      image: cover,
      title: "Uber eats",
      content:
        "Uber Eats is an online food ordering and delivery platform launched by Uber in 2014.",
      btn1: "FINTECH",
      profile: profile,
      btn2: "HEALTH",
    },
    {
      image: cover,
      title: "Uber eats",
      content:
        "Uber Eats is an online food ordering and delivery platform launched by Uber in 2014.",
      btn1: "FINTECH",
      profile: profile,
      btn2: "HEALTH",
    },
    {
      image: cover,
      title: "Uber eats",
      content:
        "Uber Eats is an online food ordering and delivery platform launched by Uber in 2014.",
      btn1: "FINTECH",
      profile: profile,
      btn2: "HEALTH",
    },
    {
      image: cover,
      title: "Uber eats",
      content:
        "Uber Eats is an online food ordering and delivery platform launched by Uber in 2014.",
      btn1: "FINTECH",
      profile: profile,
      btn2: "HEALTH",
    },
    {
      image: cover,
      title: "Uber eats",
      content:
        "Uber Eats is an online food ordering and delivery platform launched by Uber in 2014.",
      btn1: "FINTECH",
      profile: profile,
      btn2: "HEALTH",
    },
  ];
  const [explore, setexplore] = useState(false);
  const [found, setFound] = useState([...cardlist]);

  const search = (e) => {
    const searchResult = cardlist.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFound(searchResult);
  };
  return (
    <div id="content" className="flex-fill">
      {explore ? (
        <Invest search={search} cardlist={found} bell={bell} mail={mail} />
      ) : (
        <Currently setexplore={setexplore} explore={explore} />
      )}
    </div>
  );
};

export default Content;
