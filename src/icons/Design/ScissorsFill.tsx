import React from "react";
import { Icon, IconProps } from "../Icon";

export type ScissorsFillProps = Omit<IconProps, "name">;

export const ScissorsFill = (props: ScissorsFillProps) => (
  <Icon name="scissors-fill" {...props} />
);
