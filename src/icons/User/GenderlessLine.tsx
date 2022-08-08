import React from "react";
import { Icon, IconProps } from "../Icon";

export type GenderlessLineProps = Omit<IconProps, "name">;

export const GenderlessLine = (props: GenderlessLineProps) => (
  <Icon name="genderless-line" {...props} />
);
