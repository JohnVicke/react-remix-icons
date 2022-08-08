import React from "react";
import { Icon, IconProps } from "../Icon";

export type BallPenLineProps = Omit<IconProps, "name">;

export const BallPenLine = (props: BallPenLineProps) => (
  <Icon name="ball-pen-line" {...props} />
);
