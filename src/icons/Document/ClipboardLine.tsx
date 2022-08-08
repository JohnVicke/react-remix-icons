import React from "react";
import { Icon, IconProps } from "../Icon";

export type ClipboardLineProps = Omit<IconProps, "name">;

export const ClipboardLine = (props: ClipboardLineProps) => (
  <Icon name="clipboard-line" {...props} />
);
