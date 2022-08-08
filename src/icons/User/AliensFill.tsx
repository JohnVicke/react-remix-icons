import React from "react";
import { Icon, IconProps } from "../Icon";

export type AliensFillProps = Omit<IconProps, "name">;

export const AliensFill = (props: AliensFillProps) => (
  <Icon name="aliens-fill" {...props} />
);
