import React from "react";
import { Icon, IconProps } from "../Icon";

export type Suitcase3FillProps = Omit<IconProps, "name">;

export const Suitcase3Fill = (props: Suitcase3FillProps) => (
  <Icon name="suitcase-3-fill" {...props} />
);
