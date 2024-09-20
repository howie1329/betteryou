"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Workout } from "../lib/workoutType";

function Page() {
  const [workoutItem, setWorkoutItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const newWorkoutItem = new Workout("squat", "legs", 3, 10, 100, 0);
    const fetchData = async () => {
      let response = await fetch("/api/workout");
      let data = await response.json();
      setWorkoutItem(data);
      setLoading(false);
      console.log(workoutItem);
    };

    const postData = async () => {
      const response = await axios.post("/api/workout", newWorkoutItem);
    };
    fetchData();
    postData();
  }, []);

  const Display = () => {
    if (loading) {
      return <p>Loading</p>;
    } else {
      return (
        workoutItem &&
        workoutItem.map((item) => <p key={item.id}>{item.name}</p>)
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
