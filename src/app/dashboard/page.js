"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Workout } from "../lib/types";

function Page() {
  const [workoutItem, setWorkoutItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleDelete = async (id) => {
    const error = await axios.delete(`/api/log/${id}`);
    if (error.status != 200) {
      alert(error);
    }
  };

  useEffect(() => {
    const newWorkoutItem = new Workout("squat", "legs");
    //Fetching Single Workouts
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/workout");
        if (response != null && response.status == 200) {
          console.log(response.data);
          setWorkoutItem(response.data);
          setLoading(false);
        }
      } catch (error) {
        alert(error);
      }
    };
    // Posting Single Workouts
    const postWorkout = async () => {
      const response = await axios.post("/api/workout", newWorkoutItem);
    };
    fetchData();
    //postWorkout();
  }, []);

  const Display = () => {
    if (loading) {
      return <p>Loading</p>;
    } else {
      return (
        <>
          {workoutItem &&
            workoutItem.map((item) => <p key={item.id}>{item.name}</p>)}
          <button
            onClick={(e) =>
              handleDelete("3296aed9-7489-40b4-a423-18994d99a18f")
            }
          >
            Delete Me
          </button>
        </>
      );
    }
  };

  return (
    <div>
      <Display />
    </div>
  );
}

export default Page;
