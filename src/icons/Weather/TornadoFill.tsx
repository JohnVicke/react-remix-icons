import React from "react";
import { Icon, IconProps } from "../Icon";

export type TornadoFillProps = Omit<IconProps, "name">;

export const TornadoFill = (props: TornadoFillProps) => (
  <Icon name="tornado-fill" {...props} />
);
