import React from "react";
import { Icon, IconProps } from "../Icon";

export type HandSanitizerFillProps = Omit<IconProps, "name">;

export const HandSanitizerFill = (props: HandSanitizerFillProps) => (
  <Icon name="hand-sanitizer-fill" {...props} />
);
