import React from "react";
import { Icon, IconProps } from "../Icon";

export type SpeakerFillProps = Omit<IconProps, "name">;

export const SpeakerFill = (props: SpeakerFillProps) => (
  <Icon name="speaker-fill" {...props} />
);
