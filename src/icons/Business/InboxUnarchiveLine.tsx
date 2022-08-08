import React from "react";
import { Icon, IconProps } from "../Icon";

export type InboxUnarchiveLineProps = Omit<IconProps, "name">;

export const InboxUnarchiveLine = (props: InboxUnarchiveLineProps) => (
  <Icon name="inbox-unarchive-line" {...props} />
);
