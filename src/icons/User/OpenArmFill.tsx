import React from "react";
import { Icon, IconProps } from "../Icon";

export type OpenArmFillProps = Omit<IconProps, "name">;

export const OpenArmFill = (props: OpenArmFillProps) => (
  <Icon name="open-arm-fill" {...props} />
);
