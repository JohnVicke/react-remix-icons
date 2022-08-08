import React from "react";
import { Icon, IconProps } from "../Icon";

export type SlackLineProps = Omit<IconProps, "name">;

export const SlackLine = (props: SlackLineProps) => (
  <Icon name="slack-line" {...props} />
);
