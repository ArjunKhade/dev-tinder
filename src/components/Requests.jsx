import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../constant/api.config";
import { useDispatch, useSelector } from "react-redux";
import data from "../data/data.json";
import { addRequets } from "../store/RequestSlice";
const Requests = () => {
  const request = useSelector((store) => store.requests);
  const dispatch = useDispatch();
  const { firstname, lastname, photourl, skills, about } = data[0];



  const fetchRequests = async () => {
    try {
      const data = await axios.get(BASE_URL + "requests");
      console.log(data.json());
    } catch (err) {
      console.log(err);
    }
  };

  const reviewRequest = async (status, id) =>{
    const data = await axios.post(BASE_URL,{ status, id})
  }

  useEffect(() => {
    fetchRequests();
    dispatch(addRequets(data[0]));
  });

  return (
    <div>
      <h2 className="flex justify-center my-10 text-bold text-3xl">
        Connection Requests
      </h2>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        <div className="max-w-sm bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
          <div className="flex items-center gap-4">
            <img
              src={photourl}
              alt={`${firstname} ${lastname}`}
              className="w-20 h-20 rounded-full object-cover border-2 border-indigo-500"
            />

            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {firstname} {lastname}
              </h2>
              <p className="text-sm text-gray-500">Frontend Developer</p>
            </div>
          </div>

          <p className="mt-4 text-gray-600 text-sm leading-relaxed">{about}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-700"
              >
                {skill}
              </span>
            ))}
          </div>
          <button className=" mt-4 btn btn-primary" onClick={reviewRequest("ACCEPT",1)}>Accept</button>
          <button className=" mt-4 mx-2 btn btn-secondary" onClick={reviewRequest("REJECT",1)}>Reject</button>
        </div>
      </div>
    </div>
  );
};

export default Requests;
