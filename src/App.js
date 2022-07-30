import { Suspense } from "react";
import "./styles.css";

const MyComponent = () => {
  const { data } = useSWR(URL, getData);
  return <p>私の名前は{data.name}です</p>;
};

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <MyComponent />
    </Suspense>
  );
}
