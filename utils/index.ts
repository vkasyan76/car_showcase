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

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
