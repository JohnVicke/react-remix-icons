import React from "react";
import { Icon, IconProps } from "../Icon";

export type ScalesFillProps = Omit<IconProps, "name">;

export const ScalesFill = (props: ScalesFillProps) => (
  <Icon name="scales-fill" {...props} />
);
