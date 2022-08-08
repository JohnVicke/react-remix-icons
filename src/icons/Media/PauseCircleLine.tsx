import React from "react";
import { Icon, IconProps } from "../Icon";

export type PauseCircleLineProps = Omit<IconProps, "name">;

export const PauseCircleLine = (props: PauseCircleLineProps) => (
  <Icon name="pause-circle-line" {...props} />
);
