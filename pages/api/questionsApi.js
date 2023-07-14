import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.NEXT_PUBLIC_API_URL + "/questions";

export function saveQuestion(question) {
  console.log(baseUrl);
  return fetch(baseUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(question),
  })
    .then(handleResponse)
    .catch(handleError);
}
