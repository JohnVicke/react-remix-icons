import React from "react";
import { Icon, IconProps } from "../Icon";

export type BellLineProps = Omit<IconProps, "name">;

export const BellLine = (props: BellLineProps) => (
  <Icon name="bell-line" {...props} />
);
