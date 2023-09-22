import { CommonCategory } from "@/types/common";

function isValidCategory(
  category: string | string[] | undefined
): category is CommonCategory | "all" {
  if (typeof category !== "string") return false;
  return (
    category === "all" ||
    category === "humor" ||
    category === "politics" ||
    category === "entertainments" ||
    category === "animal" ||
    category === "sports" ||
    category === "life" ||
    category === "economy" ||
    category === "accident"
  );
}

export default isValidCategory;
