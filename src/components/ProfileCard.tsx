import React from "react";
import { Card, CardContent, CardMedia, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Profile } from "../types/Profile";

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={profile.photo} alt={profile.name} />
      <CardContent>
        <Typography variant="h6">{profile.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {profile.description}
        </Typography>
        <Link to={`/profile/${profile.id}`}>
          <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
            Summary
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
