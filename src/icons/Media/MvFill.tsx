import React from "react";
import { Icon, IconProps } from "../Icon";

export type MvFillProps = Omit<IconProps, "name">;

export const MvFill = (props: MvFillProps) => (
  <Icon name="mv-fill" {...props} />
);
