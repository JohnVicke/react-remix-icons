import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileDamageLineProps = Omit<IconProps, "name">;

export const FileDamageLine = (props: FileDamageLineProps) => (
  <Icon name="file-damage-line" {...props} />
);
