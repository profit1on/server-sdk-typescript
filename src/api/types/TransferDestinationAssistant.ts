/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface TransferDestinationAssistant {
    type: "assistant";
    /**
     * This is the mode to use for the transfer. Default is `rolling-history`.
     *
     * - `rolling-history`: This is the default mode. It keeps the entire conversation history and appends the new assistant's system message on transfer.
     *
     *   Example:
     *
     *   Pre-transfer:
     *   system: assistant1 system message
     *   assistant: assistant1 first message
     *   user: hey, good morning
     *   assistant: how can i help?
     *   user: i need help with my account
     *   assistant: (destination.message)
     *
     *   Post-transfer:
     *   system: assistant1 system message
     *   assistant: assistant1 first message
     *   user: hey, good morning
     *   assistant: how can i help?
     *   user: i need help with my account
     *   assistant: (destination.message)
     *   system: assistant2 system message
     *   assistant: assistant2 first message (or model generated if firstMessageMode is set to `assistant-speaks-first-with-model-generated-message`)
     *
     * - `swap-system-message-in-history`: This replaces the original system message with the new assistant's system message on transfer.
     *
     *   Example:
     *
     *   Pre-transfer:
     *   system: assistant1 system message
     *   assistant: assistant1 first message
     *   user: hey, good morning
     *   assistant: how can i help?
     *   user: i need help with my account
     *   assistant: (destination.message)
     *
     *   Post-transfer:
     *   system: assistant2 system message
     *   assistant: assistant1 first message
     *   user: hey, good morning
     *   assistant: how can i help?
     *   user: i need help with my account
     *   assistant: (destination.message)
     *   assistant: assistant2 first message (or model generated if firstMessageMode is set to `assistant-speaks-first-with-model-generated-message`)
     */
    transferMode?: Vapi.TransferMode;
    /** This is the assistant to transfer the call to. */
    assistantName: string;
    /**
     * This is the message to say before transferring the call to the destination.
     *
     * If this is not provided and transfer tool messages is not provided, default is "Transferring the call now".
     *
     * If set to "", nothing is spoken. This is useful when you want to silently transfer. This is especially useful when transferring between assistants in a squad. In this scenario, you likely also want to set `assistant.firstMessageMode=assistant-speaks-first-with-model-generated-message` for the destination assistant.
     */
    message?: string;
    /** This is the description of the destination, used by the AI to choose when and how to transfer the call. */
    description?: string;
}
