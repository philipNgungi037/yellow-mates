import React from "react";
import TeamData from "./TeamData";

const Team = () => {
  return (
    <div className="team-members flex justify-between  overflow-x-scroll  gap-2   px-16">
      {TeamData.map((member, index) =>
        <div className="team-member-card" key={index}>
          <img src={member.image} alt={member.name} className="team-img border border-yellow-400" />
          {/* <p>{member.name}</p> */}
        </div>
      )}
    </div>
  );
};

export default Team;