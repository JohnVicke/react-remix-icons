import React from "react";
import { Icon, IconProps } from "../Icon";

export type VuejsLineProps = Omit<IconProps, "name">;

export const VuejsLine = (props: VuejsLineProps) => (
  <Icon name="vuejs-line" {...props} />
);
