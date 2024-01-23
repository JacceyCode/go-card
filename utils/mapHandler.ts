const GOOGLE_API_KEY = "AIzaSyAVmnZltv8Eb4-BTvVLjQYN1ZlJemxCqng";

export const getMap = (lat: string, lng: string) => {
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=16&size=800x400&maptype=roadmap&markers=color:green%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;

  return mapUrl;
};

export const getLocation = async (address: string) => {
  const data = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GOOGLE_API_KEY}`
  );

  const result = await data.json();

  return result;
};
