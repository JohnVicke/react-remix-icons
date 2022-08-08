import React from "react";
import { Icon, IconProps } from "../Icon";

export type TextWrapProps = Omit<IconProps, "name">;

export const TextWrap = (props: TextWrapProps) => (
  <Icon name="text-wrap" {...props} />
);
