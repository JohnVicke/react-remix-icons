import React from "react";
import { Icon, IconProps } from "../Icon";

export type SpamFillProps = Omit<IconProps, "name">;

export const SpamFill = (props: SpamFillProps) => (
  <Icon name="spam-fill" {...props} />
);
