// import { useEffect, useState } from "react";
import MeetupList from ".././components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/69/Bloem_van_een_kerstroos_%28Helleborus_niger%29_16-12-2021._%28d.j.b%29_02.jpg",
    address: "Somewhere in Kim Nguu, Hanoi City",
    description: "This is the first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/69/Bloem_van_een_kerstroos_%28Helleborus_niger%29_16-12-2021._%28d.j.b%29_02.jpg",
    address: "Somewhere in Huu Bang, Hanoi City",
    description: "This is the second meetup!",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/69/Bloem_van_een_kerstroos_%28Helleborus_niger%29_16-12-2021._%28d.j.b%29_02.jpg",
    address: "Somewhere in Dinh Cong, Hanoi City",
    description: "This is the Third meetup!",
  },
];

function HomePage(props) {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);
  // useEffect(() => {
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);
  // return <MeetupList meetups={loadedMeetups} />;
  return <MeetupList meetups={props.meetups} />;
}

export function getStaticProps() {
  //fetch data from API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}
export default HomePage;
