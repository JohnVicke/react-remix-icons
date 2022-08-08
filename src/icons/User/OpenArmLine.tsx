import React from "react";
import { Icon, IconProps } from "../Icon";

export type OpenArmLineProps = Omit<IconProps, "name">;

export const OpenArmLine = (props: OpenArmLineProps) => (
  <Icon name="open-arm-line" {...props} />
);
