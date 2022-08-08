import React from "react";
import { Icon, IconProps } from "../Icon";

export type StopMiniLineProps = Omit<IconProps, "name">;

export const StopMiniLine = (props: StopMiniLineProps) => (
  <Icon name="stop-mini-line" {...props} />
);
