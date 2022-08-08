import React from "react";
import { Icon, IconProps } from "../Icon";

export type KeynoteLineProps = Omit<IconProps, "name">;

export const KeynoteLine = (props: KeynoteLineProps) => (
  <Icon name="keynote-line" {...props} />
);
