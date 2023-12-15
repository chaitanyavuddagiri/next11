import React from "react";

export const getStaticPaths = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();

  const paths = users.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const user = await data.json();

  return {
    props: { ninja: user },
  };
};

const Details = ({ ninja }) => {
  return (
    <>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </>
  );
};

export default Details;
