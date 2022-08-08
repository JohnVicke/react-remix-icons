import React from "react";
import { Icon, IconProps } from "../Icon";

export type HandSanitizerLineProps = Omit<IconProps, "name">;

export const HandSanitizerLine = (props: HandSanitizerLineProps) => (
  <Icon name="hand-sanitizer-line" {...props} />
);
