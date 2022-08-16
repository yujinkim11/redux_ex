import { useSelector } from "react-redux";
import { GrandSonBox } from "./GrandSonBox";

export const Box = () => {
  let count = useSelector((state) => state.count);
  return (
    <>
      <div>this is box{count}</div>
      <GrandSonBox />
    </>
  );
};
