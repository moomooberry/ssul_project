import { CommonRank } from "@/types/common";

function isValidRank(rank: string | string[] | undefined): rank is CommonRank {
  if (typeof rank !== "string") return false;
  return rank === "liked" || rank === "view" || rank === "created";
}

export default isValidRank;
