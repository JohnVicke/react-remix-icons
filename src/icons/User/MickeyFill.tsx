import React from "react";
import { Icon, IconProps } from "../Icon";

export type MickeyFillProps = Omit<IconProps, "name">;

export const MickeyFill = (props: MickeyFillProps) => (
  <Icon name="mickey-fill" {...props} />
);
