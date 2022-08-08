import React from "react";
import { Icon, IconProps } from "../Icon";

export type ProjectorLineProps = Omit<IconProps, "name">;

export const ProjectorLine = (props: ProjectorLineProps) => (
  <Icon name="projector-line" {...props} />
);
