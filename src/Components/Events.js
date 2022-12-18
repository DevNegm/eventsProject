import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Events() {
  const APIURL = "https://api.calendariocultural.era-coding.com/api";
  const key = "d83fcb5bbf8bfa4b05a373b2694320e211ea26f6";
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  console.log("cat",categories)
  const token = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Token ${key}`,
    },
  };
  const getEvents = () => {
    fetch(`${APIURL}/events/`, token)
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  const getCategories = () => {
    fetch(`${APIURL}/category/`, token)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };
  const getSubCategories = () => {
    fetch(`${APIURL}/subcategory/`, token)
      .then((res) => res.json())
      .then((data) => setSubCategories(data));
  };

  const filterBySubCat = (catName) => {
    fetch(`${APIURL}/subcategory/${catName}`, token)
      .then((res) => res.json())
      .then((data) => setData(data.event));
  };

  console.log(data);
  useEffect(() => {
    getCategories();
    getSubCategories();
    getEvents();
  }, []);
  return (
    <div className="main container py-5">
      <div className="container">
        <h2 className="primary-color fs-4  mb-3">Category</h2>
        <div className="row d-flex wrap gap-3 mb-5">
          {categories.map((cat) => (
            <p
              key={cat.title}
              href=""
              className="text-dark text-decoration-none col rounded-2 p-4 fw-bold"
              style={{ minWidth: "150px", backgroundColor: "#F8F7FA" }}
            >
              {cat.title}
            </p>
          ))}
       
        </div>
        <h2 className="primary-color fs-4  mb-3">SubCategory</h2>
        <div className="row d-flex wrap gap-3 mb-5">
        <button
              onClick={() => getEvents()}
          
              href=""
              className="text-dark text-decoration-none col rounded-2 p-4 fw-bold"
              style={{ minWidth: "150px", backgroundColor: "#F8F7FA" }}
            >
              All
            </button>
          {subCategories.map((subCat) => (
            <button
              onClick={() => filterBySubCat(subCat.title)}
              key={subCat.title}
              href=""
              className="text-dark text-decoration-none col rounded-2 p-4 fw-bold"
              style={{ minWidth: "150px", backgroundColor: "#F8F7FA" }}
            >
              {subCat.title}
            </button>
          ))}
        </div>
        <div className="row">
          <h2 className="primary-color fs-4 mb-3">Events</h2>

          {data.length > 0 ? (
            data?.map((event, index) => {
              return (
                <Link
                  to={`/event/${event.slug}`}
                  key={event?.id}
                  className="col-md-3 text-decoration-none text-dark p-0 event-card"
                >
                  <div className="card-img p-0">
                    <img
                      className="w-100"
                      style={{ height: "200px" }}
                      src={event?.image}
                      alt={event?.title}
                    />
                  </div>

                  <div className="d-flex flex-column p-3 card-body">
                    <h2 className="event-title  m-0 fw-bold fs-5 primary-color">
                      {event?.title}
                    </h2>

                    <div className="d-flex flex-wrap gap-2 text-muted pt-2">
                      <p className="m-0">
                        <AiOutlineClockCircle /> 21:00
                      </p>
                      <p className="m-0">{event?.date}</p>
                      <p className="m-0 event-title">
                        <HiLocationMarker /> {event?.location}
                      </p>
                    </div>

                    <div className="d-flex flex-column gap-3">
                      <div
                        className="pt-2 card-desc m-0"
                        dangerouslySetInnerHTML={{ __html: event?.description }}
                      />
                      <button className="bg-color border-0 text-white mt-auto px-4 py-2 rounded-1">
                        Read More
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <div>
              <h3 className="text-center py-5 text-muted">There's No Events</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
