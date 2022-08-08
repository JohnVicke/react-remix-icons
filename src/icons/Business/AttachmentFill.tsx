import React from "react";
import { Icon, IconProps } from "../Icon";

export type AttachmentFillProps = Omit<IconProps, "name">;

export const AttachmentFill = (props: AttachmentFillProps) => (
  <Icon name="attachment-fill" {...props} />
);
