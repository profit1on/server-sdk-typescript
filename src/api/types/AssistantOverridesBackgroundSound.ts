/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * This is the background sound in the call. Default for phone calls is 'office' and default for web calls is 'off'.
 */
export type AssistantOverridesBackgroundSound = "off" | "office";

export const AssistantOverridesBackgroundSound = {
    Off: "off",
    Office: "office",
} as const;
