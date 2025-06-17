import React from "react";

const UserCard = ({ user }) => {
  console.log("User card test", user);
  const { firstName, lastName, bio, skills, photoUrl, age, gender } = user;
  return (
    <div>
      <div className="card bg-base-300 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img src={photoUrl} alt="Picture" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && gender && <h3>{age + "  " + gender}</h3>}
          <p>{bio}</p>
          <p>{skills}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-secondary">Send Request</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
