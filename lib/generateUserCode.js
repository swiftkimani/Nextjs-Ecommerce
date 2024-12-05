export function generateUserCode(prefix, fullName) {
  // Extract initials from the full name
  const initials = fullName
    .split(" ") // Split the name into parts
    .map((namePart) => namePart[0]?.toUpperCase()) // Get the first letter of each part in uppercase
    .join(""); // Combine them into a string

  // Get the current date and time
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const date = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Combine all parts to form the unique code
  const timestamp = `${year}${month}${date}${hours}${minutes}${seconds}`;
  const userCode = `${prefix.toUpperCase()}-${initials}-${timestamp}`;

  return userCode;
}
