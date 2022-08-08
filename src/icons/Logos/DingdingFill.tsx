import React from "react";
import { Icon, IconProps } from "../Icon";

export type DingdingFillProps = Omit<IconProps, "name">;

export const DingdingFill = (props: DingdingFillProps) => (
  <Icon name="dingding-fill" {...props} />
);
