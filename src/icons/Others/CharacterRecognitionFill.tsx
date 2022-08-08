import React from "react";
import { Icon, IconProps } from "../Icon";

export type CharacterRecognitionFillProps = Omit<IconProps, "name">;

export const CharacterRecognitionFill = (
  props: CharacterRecognitionFillProps
) => <Icon name="character-recognition-fill" {...props} />;
