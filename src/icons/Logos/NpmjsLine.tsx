import React from "react";
import { Icon, IconProps } from "../Icon";

export type NpmjsLineProps = Omit<IconProps, "name">;

export const NpmjsLine = (props: NpmjsLineProps) => (
  <Icon name="npmjs-line" {...props} />
);
