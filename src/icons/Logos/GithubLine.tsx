import React from "react";
import { Icon, IconProps } from "../Icon";

export type GithubLineProps = Omit<IconProps, "name">;

export const GithubLine = (props: GithubLineProps) => (
  <Icon name="github-line" {...props} />
);
