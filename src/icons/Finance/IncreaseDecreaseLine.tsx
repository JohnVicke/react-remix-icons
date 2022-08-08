import React from "react";
import { Icon, IconProps } from "../Icon";

export type IncreaseDecreaseLineProps = Omit<IconProps, "name">;

export const IncreaseDecreaseLine = (props: IncreaseDecreaseLineProps) => (
  <Icon name="increase-decrease-line" {...props} />
);
