// import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export async function makePostRequest(
  setLoading,
  endpoint,
  data,
  resourceName,
  reset
) {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
    const response = await fetch(`${baseUrl}/${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setLoading(false);
      toast.success(`New ${resourceName} Created Successfully`);
      reset();
    } else {
      setLoading(false);
      const errorData = await response.json().catch(() => null);
      if (response.status === 409) {
        toast.error("The Giving Warehouse Stock is NOT Enough");
      } else if (errorData?.message) {
        toast.error(errorData.message);
      } else {
        toast.error("Something Went wrong");
      }
    }
  } catch (error) {
    setLoading(false);
    toast.error("Something went wrong");
  }
}

export async function makePutRequest(
  setLoading,
  endpoint,
  data,
  resourceName,
  redirect,
  reset
) {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
    const response = await fetch(`${baseUrl}/${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      setLoading(false);
      toast.success(`${resourceName} Updated Successfully`);
      redirect();
    } else {
      setLoading(false);
      toast.error("Something Went wrong");
    }
  } catch (error) {
    setLoading(false);
    toast.error("Something went wrong");
  }
}
