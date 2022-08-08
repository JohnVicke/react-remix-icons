import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as icons from "../../src/";

type IconWithTextProps = {
  icon: React.ReactNode;
  name: string;
};

const IconWithText = ({ icon, name }: IconWithTextProps) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {icon}
    </div>
  );
};
const App = () => {
  return (
    <div style={{ width: "100%", maxWidth: 1280, margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {Object.keys(icons).map(key => {
          const Icon = icons[key];
          return (
            <div style={{ margin: "1em" }}>
              <IconWithText key={key} icon={<Icon size="2x" />} name={key} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
