import React from "react";
import { Icon, IconProps } from "../Icon";

export type AttachmentLineProps = Omit<IconProps, "name">;

export const AttachmentLine = (props: AttachmentLineProps) => (
  <Icon name="attachment-line" {...props} />
);
