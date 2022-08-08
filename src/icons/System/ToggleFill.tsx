import React from "react";
import { Icon, IconProps } from "../Icon";

export type ToggleFillProps = Omit<IconProps, "name">;

export const ToggleFill = (props: ToggleFillProps) => (
  <Icon name="toggle-fill" {...props} />
);
