import React from "react";
import { Icon, IconProps } from "../Icon";

export type AlignJustifyProps = Omit<IconProps, "name">;

export const AlignJustify = (props: AlignJustifyProps) => (
  <Icon name="align-justify" {...props} />
);
