import React from "react";
import { Icon, IconProps } from "../Icon";

export type VoiceprintFillProps = Omit<IconProps, "name">;

export const VoiceprintFill = (props: VoiceprintFillProps) => (
  <Icon name="voiceprint-fill" {...props} />
);
