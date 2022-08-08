import React from "react";
import { Icon, IconProps } from "../Icon";

export type FunctionsProps = Omit<IconProps, "name">;

export const Functions = (props: FunctionsProps) => (
  <Icon name="functions" {...props} />
);
