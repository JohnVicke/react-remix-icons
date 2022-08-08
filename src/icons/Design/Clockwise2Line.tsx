import React from "react";
import { Icon, IconProps } from "../Icon";

export type Clockwise2LineProps = Omit<IconProps, "name">;

export const Clockwise2Line = (props: Clockwise2LineProps) => (
  <Icon name="clockwise-2-line" {...props} />
);
