import React from "react";
import { Icon, IconProps } from "../Icon";

export type NpmjsFillProps = Omit<IconProps, "name">;

export const NpmjsFill = (props: NpmjsFillProps) => (
  <Icon name="npmjs-fill" {...props} />
);
