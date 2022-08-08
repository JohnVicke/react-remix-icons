import React from "react";
import { Icon, IconProps } from "../Icon";

export type TornadoLineProps = Omit<IconProps, "name">;

export const TornadoLine = (props: TornadoLineProps) => (
  <Icon name="tornado-line" {...props} />
);
