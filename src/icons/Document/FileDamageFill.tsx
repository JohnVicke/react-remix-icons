import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileDamageFillProps = Omit<IconProps, "name">;

export const FileDamageFill = (props: FileDamageFillProps) => (
  <Icon name="file-damage-fill" {...props} />
);
