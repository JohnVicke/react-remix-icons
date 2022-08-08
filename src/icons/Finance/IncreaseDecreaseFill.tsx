import React from "react";
import { Icon, IconProps } from "../Icon";

export type IncreaseDecreaseFillProps = Omit<IconProps, "name">;

export const IncreaseDecreaseFill = (props: IncreaseDecreaseFillProps) => (
  <Icon name="increase-decrease-fill" {...props} />
);
