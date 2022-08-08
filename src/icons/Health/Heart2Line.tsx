import React from "react";
import { Icon, IconProps } from "../Icon";

export type Heart2LineProps = Omit<IconProps, "name">;

export const Heart2Line = (props: Heart2LineProps) => (
  <Icon name="heart-2-line" {...props} />
);
