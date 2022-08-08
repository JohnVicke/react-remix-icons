import React from "react";
import { Icon, IconProps } from "../Icon";

export type PantoneFillProps = Omit<IconProps, "name">;

export const PantoneFill = (props: PantoneFillProps) => (
  <Icon name="pantone-fill" {...props} />
);
