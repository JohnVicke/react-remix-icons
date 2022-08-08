import React from "react";
import { Icon, IconProps } from "../Icon";

export type VoiceRecognitionLineProps = Omit<IconProps, "name">;

export const VoiceRecognitionLine = (props: VoiceRecognitionLineProps) => (
  <Icon name="voice-recognition-line" {...props} />
);
