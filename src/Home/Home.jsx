import React from "react";

export default function Home({ a }) {
  return (
    <div>
      <p>{a} This is home pages</p>
      <a href="/login" className="text-blue-600">
        click go to login page
      </a>
    </div>
  );
}
