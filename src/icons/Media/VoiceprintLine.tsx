import React from "react";
import { Icon, IconProps } from "../Icon";

export type VoiceprintLineProps = Omit<IconProps, "name">;

export const VoiceprintLine = (props: VoiceprintLineProps) => (
  <Icon name="voiceprint-line" {...props} />
);
