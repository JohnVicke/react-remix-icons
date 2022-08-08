import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShowersLineProps = Omit<IconProps, "name">;

export const ShowersLine = (props: ShowersLineProps) => (
  <Icon name="showers-line" {...props} />
);
