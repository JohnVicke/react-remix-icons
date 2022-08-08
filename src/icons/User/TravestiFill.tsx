import React from "react";
import { Icon, IconProps } from "../Icon";

export type TravestiFillProps = Omit<IconProps, "name">;

export const TravestiFill = (props: TravestiFillProps) => (
  <Icon name="travesti-fill" {...props} />
);
