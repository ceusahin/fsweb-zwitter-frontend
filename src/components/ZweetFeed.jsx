import axios from "axios";
import { useEffect, useState } from "react";
import ZweetCard from "./ZweetCard";

const ZweetFeed = () => {
  const [zweets, setZweets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/zwitter/zweets/all")
      .then((response) => {
        // console.log("Data:", response.data);
        if (Array.isArray(response.data)) {
          response.data.reverse();
          setZweets(response.data);
        } else {
          setZweets([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching zweets:", error);
        setZweets([]);
      });
  }, []);

  return (
    <>
      {zweets.length === 0 ? (
        <p className="text-center py-4 text-xl font-bold">
          There is no zweet yet.
        </p>
      ) : (
        zweets.map((zweet) => (
          <ZweetCard
            key={zweet.id}
            fullname={zweet.fullname}
            username={zweet.username}
            zweet={zweet.content}
            timestamp={zweet.created_at}
          />
        ))
      )}
    </>
  );
};

export default ZweetFeed;
