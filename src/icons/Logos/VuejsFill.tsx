import React from "react";
import { Icon, IconProps } from "../Icon";

export type VuejsFillProps = Omit<IconProps, "name">;

export const VuejsFill = (props: VuejsFillProps) => (
  <Icon name="vuejs-fill" {...props} />
);
