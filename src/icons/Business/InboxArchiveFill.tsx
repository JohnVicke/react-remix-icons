import React from "react";
import { Icon, IconProps } from "../Icon";

export type InboxArchiveFillProps = Omit<IconProps, "name">;

export const InboxArchiveFill = (props: InboxArchiveFillProps) => (
  <Icon name="inbox-archive-fill" {...props} />
);
