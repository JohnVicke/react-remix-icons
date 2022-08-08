import React from "react";
import { Icon, IconProps } from "../Icon";

export type SpeakerLineProps = Omit<IconProps, "name">;

export const SpeakerLine = (props: SpeakerLineProps) => (
  <Icon name="speaker-line" {...props} />
);
