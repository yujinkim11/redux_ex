import { useSelector } from "react-redux";

export const GrandSonBox = () => {
  let count = useSelector((state) => state.count);
  return <div>grandsonBox {count}</div>;
};
