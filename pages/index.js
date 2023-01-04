// import { useEffect, useState } from "react";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

import MeetupList from ".././components/meetups/MeetupList";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/6/69/Bloem_van_een_kerstroos_%28Helleborus_niger%29_16-12-2021._%28d.j.b%29_02.jpg",
//     address: "Somewhere in Kim Nguu, Hanoi City",
//     description: "This is the first meetup!",
//   },
//   {
//     id: "m2",
//     title: "A Second Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/6/69/Bloem_van_een_kerstroos_%28Helleborus_niger%29_16-12-2021._%28d.j.b%29_02.jpg",
//     address: "Somewhere in Huu Bang, Hanoi City",
//     description: "This is the second meetup!",
//   },
//   {
//     id: "m3",
//     title: "A Third Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/6/69/Bloem_van_een_kerstroos_%28Helleborus_niger%29_16-12-2021._%28d.j.b%29_02.jpg",
//     address: "Somewhere in Dinh Cong, Hanoi City",
//     description: "This is the Third meetup!",
//   },
// ];

function HomePage(props) {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);
  // useEffect(() => {
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);
  // return <MeetupList meetups={loadedMeetups} />;
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge líst of highly active React Meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export async function getStaticProps() {
  //fetch data from API
  const client = await MongoClient.connect(
    "mongodb+srv://cuong1806:Cuong%401806@cluster0.simzgca.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   //fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }
export default HomePage;
