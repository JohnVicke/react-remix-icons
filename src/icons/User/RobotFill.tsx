import React from "react";
import { Icon, IconProps } from "../Icon";

export type RobotFillProps = Omit<IconProps, "name">;

export const RobotFill = (props: RobotFillProps) => (
  <Icon name="robot-fill" {...props} />
);
