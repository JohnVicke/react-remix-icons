import React from "react";
import { Icon, IconProps } from "../Icon";

export type Heart3FillProps = Omit<IconProps, "name">;

export const Heart3Fill = (props: Heart3FillProps) => (
  <Icon name="heart-3-fill" {...props} />
);
