import React from "react";
import ProfileCard from "./ProfileCard";
import { profiles } from "../data/Profiles";

interface ProfileListProps {
  onProfileSelect: (id: number) => void;
}

const ProfileList: React.FC<ProfileListProps> = ({ onProfileSelect }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} onViewMap={onProfileSelect} />
      ))}
    </div>
  );
};

export default ProfileList;
