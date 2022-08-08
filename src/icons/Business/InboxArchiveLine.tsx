import React from "react";
import { Icon, IconProps } from "../Icon";

export type InboxArchiveLineProps = Omit<IconProps, "name">;

export const InboxArchiveLine = (props: InboxArchiveLineProps) => (
  <Icon name="inbox-archive-line" {...props} />
);
