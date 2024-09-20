"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

function Page() {
  const [workoutItem, setWorkoutItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("/api/workout");
      let data = await response.json();
      setWorkoutItem(data);
      setLoading(false);
      console.log(workoutItem);
    };
    fetchData();
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
