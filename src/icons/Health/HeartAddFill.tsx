import React from "react";
import { Icon, IconProps } from "../Icon";

export type HeartAddFillProps = Omit<IconProps, "name">;

export const HeartAddFill = (props: HeartAddFillProps) => (
  <Icon name="heart-add-fill" {...props} />
);
