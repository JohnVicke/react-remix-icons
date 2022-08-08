import React from "react";
import { Icon, IconProps } from "../Icon";

export type SurroundSoundLineProps = Omit<IconProps, "name">;

export const SurroundSoundLine = (props: SurroundSoundLineProps) => (
  <Icon name="surround-sound-line" {...props} />
);
