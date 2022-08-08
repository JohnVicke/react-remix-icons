import React from "react";
import { Icon, IconProps } from "../Icon";

export type GitMergeFillProps = Omit<IconProps, "name">;

export const GitMergeFill = (props: GitMergeFillProps) => (
  <Icon name="git-merge-fill" {...props} />
);
