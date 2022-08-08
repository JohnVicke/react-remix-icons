import React from "react";
import { Icon, IconProps } from "../Icon";

export type EvernoteFillProps = Omit<IconProps, "name">;

export const EvernoteFill = (props: EvernoteFillProps) => (
  <Icon name="evernote-fill" {...props} />
);
