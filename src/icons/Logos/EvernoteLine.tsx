import React from "react";
import { Icon, IconProps } from "../Icon";

export type EvernoteLineProps = Omit<IconProps, "name">;

export const EvernoteLine = (props: EvernoteLineProps) => (
  <Icon name="evernote-line" {...props} />
);
