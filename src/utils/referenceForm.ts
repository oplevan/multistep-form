import { FormData } from "../types/form";

export async function postData(data: FormData) {
  try {
    const response = await fetch("https://ref-api.goodlord.co/reference/new", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    console.log(response);

    // show Success message
  } catch (error) {
    console.error(error);
  }
}

export function getEmploymentDuration(employmentStartDate: string, employmentEndDate: string) {
  const start = new Date(employmentStartDate);
  const end = employmentEndDate ? new Date(employmentEndDate) : new Date();
  const durationInYears = (end.getTime() - start.getTime()) / (1000 * 3600 * 24 * 365);
  return durationInYears;
}
