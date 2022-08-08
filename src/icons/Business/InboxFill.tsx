import React from "react";
import { Icon, IconProps } from "../Icon";

export type InboxFillProps = Omit<IconProps, "name">;

export const InboxFill = (props: InboxFillProps) => (
  <Icon name="inbox-fill" {...props} />
);
