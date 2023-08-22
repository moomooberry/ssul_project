import { store } from "@/store";
import { useDispatch } from "react-redux";

const useAppDispatch: () => typeof store.dispatch = useDispatch;

export default useAppDispatch;
