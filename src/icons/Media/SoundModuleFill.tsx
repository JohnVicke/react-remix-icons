import React from "react";
import { Icon, IconProps } from "../Icon";

export type SoundModuleFillProps = Omit<IconProps, "name">;

export const SoundModuleFill = (props: SoundModuleFillProps) => (
  <Icon name="sound-module-fill" {...props} />
);
