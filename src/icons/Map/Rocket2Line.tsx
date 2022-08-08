import React from "react";
import { Icon, IconProps } from "../Icon";

export type Rocket2LineProps = Omit<IconProps, "name">;

export const Rocket2Line = (props: Rocket2LineProps) => (
  <Icon name="rocket-2-line" {...props} />
);
