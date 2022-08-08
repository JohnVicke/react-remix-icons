import React from "react";
import { Icon, IconProps } from "../Icon";

export type PauseCircleFillProps = Omit<IconProps, "name">;

export const PauseCircleFill = (props: PauseCircleFillProps) => (
  <Icon name="pause-circle-fill" {...props} />
);
