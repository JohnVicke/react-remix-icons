import React from "react";
import { Icon, IconProps } from "../Icon";

export type MistLineProps = Omit<IconProps, "name">;

export const MistLine = (props: MistLineProps) => (
  <Icon name="mist-line" {...props} />
);
