import React from "react";
import { Icon, IconProps } from "../Icon";

export type InboxUnarchiveFillProps = Omit<IconProps, "name">;

export const InboxUnarchiveFill = (props: InboxUnarchiveFillProps) => (
  <Icon name="inbox-unarchive-fill" {...props} />
);
