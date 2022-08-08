import React from "react";
import { Icon, IconProps } from "../Icon";

export type MenLineProps = Omit<IconProps, "name">;

export const MenLine = (props: MenLineProps) => (
  <Icon name="men-line" {...props} />
);
