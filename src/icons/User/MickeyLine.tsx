import React from "react";
import { Icon, IconProps } from "../Icon";

export type MickeyLineProps = Omit<IconProps, "name">;

export const MickeyLine = (props: MickeyLineProps) => (
  <Icon name="mickey-line" {...props} />
);
