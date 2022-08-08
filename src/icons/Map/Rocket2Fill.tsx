import React from "react";
import { Icon, IconProps } from "../Icon";

export type Rocket2FillProps = Omit<IconProps, "name">;

export const Rocket2Fill = (props: Rocket2FillProps) => (
  <Icon name="rocket-2-fill" {...props} />
);
