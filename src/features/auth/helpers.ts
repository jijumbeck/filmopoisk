import { useAppDispatch } from "../../app/store";
import { checkToken } from "./auth.slice";
import { tokenStorage } from "./auth.storage";

export function useCheckToken() {
    const dispatch = useAppDispatch();

    if (tokenStorage.get()) {
        dispatch(checkToken());
    }
}