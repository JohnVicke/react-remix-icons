import React from "react";
import { Icon, IconProps } from "../Icon";

export type Attachment2Props = Omit<IconProps, "name">;

export const Attachment2 = (props: Attachment2Props) => (
  <Icon name="attachment-2" {...props} />
);
