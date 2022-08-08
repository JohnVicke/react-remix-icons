import React from "react";
import { Icon, IconProps } from "../Icon";

export type SlackFillProps = Omit<IconProps, "name">;

export const SlackFill = (props: SlackFillProps) => (
  <Icon name="slack-fill" {...props} />
);
