import React from "react";
import { Icon, IconProps } from "../Icon";

export type MacFillProps = Omit<IconProps, "name">;

export const MacFill = (props: MacFillProps) => (
  <Icon name="mac-fill" {...props} />
);
