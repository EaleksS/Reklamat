import { FC } from "react";
import { Layout, Slider } from "../../widgets";

export const Main: FC = (): JSX.Element => {
  return (
    <Layout>
      <div style={{ display: "flex", alignItems: "center", height: "80vh" }}>
        <Slider />
      </div>
    </Layout>
  );
};
