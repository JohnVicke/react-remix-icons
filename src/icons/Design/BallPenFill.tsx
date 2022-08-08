import React from "react";
import { Icon, IconProps } from "../Icon";

export type BallPenFillProps = Omit<IconProps, "name">;

export const BallPenFill = (props: BallPenFillProps) => (
  <Icon name="ball-pen-fill" {...props} />
);
