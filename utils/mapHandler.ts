import Constants from "expo-constants";

const googleKey = Constants?.expoConfig?.extra?.GOOGLE_API_KEY;

export const getMap = (lat: string, lng: string) => {
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=16&size=800x400&maptype=roadmap&markers=color:green%7Clabel:S%7C${lat},${lng}&key=${googleKey}`;

  return mapUrl;
};

export const getLocation = async (address: string) => {
  const data = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${googleKey}`
  );

  const result = await data.json();

  return result;
};
