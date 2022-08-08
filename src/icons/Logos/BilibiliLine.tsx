import React from "react";
import { Icon, IconProps } from "../Icon";

export type BilibiliLineProps = Omit<IconProps, "name">;

export const BilibiliLine = (props: BilibiliLineProps) => (
  <Icon name="bilibili-line" {...props} />
);
