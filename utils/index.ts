import dotenv from "dotenv";
import { HeadersProps } from "@/types";

dotenv.config({ path: ".env.local" });

// const rapidApiKey = process.env.RAPID_API_KEY;
const rapidApiKey = process.env.RAPID_API_KEY || ""; // Provide a default value

export async function fetchCars() {
  // const headers = {
  //   "X-RapidAPI-Key": rapidApiKey,
  //   "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  // };

  const headers: HeadersProps = {
    "X-RapidAPI-Key": rapidApiKey,
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  // const headersObj = new Headers();

  // Object.entries(headers).forEach(([key, value]) => {
  //   headersObj.set(key, value);
  // });

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
      // headers: headersObj,
    }
  );

  const result = await response.json();

  return result;
}
