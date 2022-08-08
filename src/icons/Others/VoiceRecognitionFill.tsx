import React from "react";
import { Icon, IconProps } from "../Icon";

export type VoiceRecognitionFillProps = Omit<IconProps, "name">;

export const VoiceRecognitionFill = (props: VoiceRecognitionFillProps) => (
  <Icon name="voice-recognition-fill" {...props} />
);
