import React from "react";
import { Icon, IconProps } from "../Icon";

export type SoundModuleLineProps = Omit<IconProps, "name">;

export const SoundModuleLine = (props: SoundModuleLineProps) => (
  <Icon name="sound-module-line" {...props} />
);
