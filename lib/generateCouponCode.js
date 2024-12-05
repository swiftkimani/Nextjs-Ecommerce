
export const generateCouponCode= (title, expiryDate) =>{
  const formattedTitle = title.replace(/\s+/g, "").toUpperCase(); // Remove spaces and convert to uppercase
  const formattedDate = new Date(expiryDate).toISOString().split("T")[0].replace(/-/g, ""); // Format date as YYYYMMDD
  const uniquePart = Math.random().toString(36).substring(2, 10).toUpperCase(); // Generate a random alphanumeric string
  const couponCode = `${formattedTitle}-${formattedDate}-${uniquePart}`;
  return couponCode;
}
