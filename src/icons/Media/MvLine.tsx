import React from "react";
import { Icon, IconProps } from "../Icon";

export type MvLineProps = Omit<IconProps, "name">;

export const MvLine = (props: MvLineProps) => (
  <Icon name="mv-line" {...props} />
);
