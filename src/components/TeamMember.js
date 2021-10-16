import React from 'react'

const TeamMember = ({member}) => {
  return (
    <div className="team-member">
      <div className="team-member__image">
        <img src={member.img} alt={member.name} />
      </div>
      <h4 className="team-member__name">{member.name}</h4>
      <p className="team-member__job">{member.job}</p>
    </div>
  );
}

export default TeamMember
