import React from "react";
import { Icon, IconProps } from "../Icon";

export type ClipboardFillProps = Omit<IconProps, "name">;

export const ClipboardFill = (props: ClipboardFillProps) => (
  <Icon name="clipboard-fill" {...props} />
);
