import { Props } from "./";
import { useDispatch, useSelector } from "react-redux";
import * as Counter from "@/redux/Counter";
// ______________________________________________________
//
export const useHooks = (props: Props) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.Counter.count);
  const n = 2;

  const handleClickIncrement = () => {
    dispatch(Counter.actions.increment());
  };
  const handleClickDecrement = () => {
    dispatch(Counter.actions.decrement());
  };
  const handleClickNTimes = () => {
    dispatch(Counter.thunks.ntimes(n));
  };

  return {
    n,
    count,
    handleClickIncrement,
    handleClickDecrement,
    handleClickNTimes
  };
};

export default useHooks;
