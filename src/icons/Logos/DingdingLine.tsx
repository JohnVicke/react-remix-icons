import React from "react";
import { Icon, IconProps } from "../Icon";

export type DingdingLineProps = Omit<IconProps, "name">;

export const DingdingLine = (props: DingdingLineProps) => (
  <Icon name="dingding-line" {...props} />
);
