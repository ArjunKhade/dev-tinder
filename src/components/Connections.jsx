import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../constant/api.config";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../store/ConnectionSlice";
import data from "../data/data.json";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);

  const fetchConnection = async () => {
    try {
      const data = await axios.get(BASE_URL + "user/connections");
      console.log(data.json());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchConnection();
    dispatch(addConnections(data));
  }, []);

  if (!connections) return;

  if (connections.length === 0) return <h1>No Connections Found!</h1>;

  return (
    <div>
      <h2 className="flex justify-center my-10 text-bold text-3xl">
        Connections
      </h2>
       <div className="flex flex-wrap justify-center gap-6 p-6">
      {connections.map((connection) => {
        const { firstname, lastname, photourl, skills, about } = connection;
        return (
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

            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              {about}
            </p>

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
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Connections;
