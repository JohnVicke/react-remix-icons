import React from "react";
import { Icon, IconProps } from "../Icon";

export type Suitcase3LineProps = Omit<IconProps, "name">;

export const Suitcase3Line = (props: Suitcase3LineProps) => (
  <Icon name="suitcase-3-line" {...props} />
);
