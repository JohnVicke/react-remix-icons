import React from "react";
import { Icon, IconProps } from "../Icon";

export type Suitcase2FillProps = Omit<IconProps, "name">;

export const Suitcase2Fill = (props: Suitcase2FillProps) => (
  <Icon name="suitcase-2-fill" {...props} />
);
