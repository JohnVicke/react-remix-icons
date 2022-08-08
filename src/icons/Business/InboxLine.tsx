import React from "react";
import { Icon, IconProps } from "../Icon";

export type InboxLineProps = Omit<IconProps, "name">;

export const InboxLine = (props: InboxLineProps) => (
  <Icon name="inbox-line" {...props} />
);
