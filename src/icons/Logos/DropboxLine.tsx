import React from "react";
import { Icon, IconProps } from "../Icon";

export type DropboxLineProps = Omit<IconProps, "name">;

export const DropboxLine = (props: DropboxLineProps) => (
  <Icon name="dropbox-line" {...props} />
);
