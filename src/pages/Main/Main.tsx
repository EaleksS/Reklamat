import { FC } from "react";
import { Layout, Slots, Slider } from "../../widgets";

export const Main: FC = (): JSX.Element => {
  return (
    <Layout>
      <div style={{ display: "flex", alignItems: "center", height: "80vh" }}>
        <Slots />
        <Slider />
      </div>
      {/* <div className="background">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
      </div>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div> */}
    </Layout>
  );
};
