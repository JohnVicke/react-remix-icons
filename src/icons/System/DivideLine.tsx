import React from "react";
import { Icon, IconProps } from "../Icon";

export type DivideLineProps = Omit<IconProps, "name">;

export const DivideLine = (props: DivideLineProps) => (
  <Icon name="divide-line" {...props} />
);
