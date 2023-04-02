import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
export default function EventDetails() {
  const params = useParams();
  const APIURL = `https://api.calendariocultural.era-coding.com/api/events/${params.eventSlug}`;
  const key = "d83fcb5bbf8bfa4b05a373b2694320e211ea26f6";
  const [data, setData] = useState([]);
  console.log(data)
  const token = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Token ${key}`,
    },
  };
  const getEvents = () => {
    fetch(APIURL, token)
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    getEvents();
  }, []);
  console.log(data)
  return (
    <div className="main container">
      <div className="row p-md-5  rounded-3 bg-light my-3">
        <div className="col-md-6 m-auto">
          <img className="w-100" style={{objectFit:"contain" , maxHeight:"400px"}} src={data.image} alt={data.title} />
        </div>
        <div className="col-md-12">
          <h2 className="fs-md-2 my-3 fw-bold primary-color">{data.title}</h2>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <p className="m-0 fw-bold fs-md-5 text-muted d-flex align-items-center gap-2"><AiOutlineClockCircle/>21:000 {data?.date}</p>
            <p className="m-0 fw-bold fs-md-5 text-muted d-flex align-items-center gap-2"><HiLocationMarker className="fs-3"/>{data?.location}</p>
            
          </div>
          <hr />
          <p className="m-0" dangerouslySetInnerHTML={{ __html: data?.description }}  />
        </div>
      </div>
    </div>
  );
}
