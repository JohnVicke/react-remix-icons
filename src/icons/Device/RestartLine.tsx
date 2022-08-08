import React from "react";
import { Icon, IconProps } from "../Icon";

export type RestartLineProps = Omit<IconProps, "name">;

export const RestartLine = (props: RestartLineProps) => (
  <Icon name="restart-line" {...props} />
);
