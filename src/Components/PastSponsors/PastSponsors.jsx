import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PastSponsors() {
    const navigate = useNavigate();
    useEffect(() => {
  const timer = setTimeout(() => {
    navigate("/login")
  }, 5000);
  return () => clearTimeout(timer);
}, []);
    return(
      <div class="wrapper403">
      <div class="box403">
      <h1 class='h1403'>403</h1>
      <p class="p403">Sorry, it's not allowed to go beyond this point!</p>
      <p class="p403"><a href="/login">Login First</a></p>
      </div>
      </div>
    );
}