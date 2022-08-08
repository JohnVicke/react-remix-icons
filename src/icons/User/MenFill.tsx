import React from "react";
import { Icon, IconProps } from "../Icon";

export type MenFillProps = Omit<IconProps, "name">;

export const MenFill = (props: MenFillProps) => (
  <Icon name="men-fill" {...props} />
);
