import React, { useEffect, useRef } from "react";

interface ProfileMapProps {
  latitude: number;
  longitude: number;
}

const ProfileMap: React.FC<ProfileMapProps> = ({ latitude, longitude }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      const map = new window.google.maps.Map(mapContainerRef.current, {
        center: { lat: latitude, lng: longitude },
        zoom: 15,
      });

      new window.google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
      });
    }
  }, [latitude, longitude]);

  return <div ref={mapContainerRef} style={{ height: "400px", width: "100%" }} />;
};

export default ProfileMap;
