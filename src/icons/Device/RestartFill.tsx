import React from "react";
import { Icon, IconProps } from "../Icon";

export type RestartFillProps = Omit<IconProps, "name">;

export const RestartFill = (props: RestartFillProps) => (
  <Icon name="restart-fill" {...props} />
);
