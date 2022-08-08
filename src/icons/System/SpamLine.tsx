import React from "react";
import { Icon, IconProps } from "../Icon";

export type SpamLineProps = Omit<IconProps, "name">;

export const SpamLine = (props: SpamLineProps) => (
  <Icon name="spam-line" {...props} />
);
