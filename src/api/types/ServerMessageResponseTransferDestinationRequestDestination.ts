/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

/**
 * This is the destination you'd like the call to be transferred to.
 */
export type ServerMessageResponseTransferDestinationRequestDestination =
    | Vapi.TransferDestinationAssistant
    | Vapi.TransferDestinationStep
    | Vapi.TransferDestinationNumber
    | Vapi.TransferDestinationSip;
