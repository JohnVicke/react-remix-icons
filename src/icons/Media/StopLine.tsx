import React from "react";
import { Icon, IconProps } from "../Icon";

export type StopLineProps = Omit<IconProps, "name">;

export const StopLine = (props: StopLineProps) => (
  <Icon name="stop-line" {...props} />
);
