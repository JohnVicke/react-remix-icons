import React from "react";
import { Icon, IconProps } from "../Icon";

export type SurroundSoundFillProps = Omit<IconProps, "name">;

export const SurroundSoundFill = (props: SurroundSoundFillProps) => (
  <Icon name="surround-sound-fill" {...props} />
);
