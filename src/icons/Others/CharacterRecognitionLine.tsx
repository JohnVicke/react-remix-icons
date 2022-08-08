import React from "react";
import { Icon, IconProps } from "../Icon";

export type CharacterRecognitionLineProps = Omit<IconProps, "name">;

export const CharacterRecognitionLine = (
  props: CharacterRecognitionLineProps
) => <Icon name="character-recognition-line" {...props} />;
