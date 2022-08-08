import React from "react";
import { Icon, IconProps } from "../Icon";

export type HeartAddLineProps = Omit<IconProps, "name">;

export const HeartAddLine = (props: HeartAddLineProps) => (
  <Icon name="heart-add-line" {...props} />
);
