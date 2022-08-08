import React from "react";
import { Icon, IconProps } from "../Icon";

export type GitMergeLineProps = Omit<IconProps, "name">;

export const GitMergeLine = (props: GitMergeLineProps) => (
  <Icon name="git-merge-line" {...props} />
);
