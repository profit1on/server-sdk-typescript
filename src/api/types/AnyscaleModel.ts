/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface AnyscaleModel {
    /** This is the starting state for the conversation. */
    messages?: Vapi.OpenAiMessage[];
    /**
     * These are the tools that the assistant can use during the call. To use existing tools, use `toolIds`.
     *
     * Both `tools` and `toolIds` can be used together.
     */
    tools?: Vapi.AnyscaleModelToolsItem[];
    /**
     * These are the tools that the assistant can use during the call. To use transient tools, use `tools`.
     *
     * Both `tools` and `toolIds` can be used together.
     */
    toolIds?: string[];
    provider: "anyscale";
    /** This is the name of the model. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
    model: string;
    /** This is the temperature that will be used for calls. Default is 0 to leverage caching for lower latency. */
    temperature?: number;
    /** These are the options for the knowledge base. */
    knowledgeBase?: Vapi.KnowledgeBase;
    /** This is the max number of tokens that the assistant will be allowed to generate in each turn of the conversation. Default is 250. */
    maxTokens?: number;
    /**
     * This determines whether we detect user's emotion while they speak and send it as an additional info to model.
     *
     * Default `false` because the model is usually are good at understanding the user's emotion from text.
     *
     * @default false
     */
    emotionRecognitionEnabled?: boolean;
    /**
     * This sets how many turns at the start of the conversation to use a smaller, faster model from the same provider before switching to the primary model. Example, gpt-3.5-turbo if provider is openai.
     *
     * Default is 0.
     *
     * @default 0
     */
    numFastTurns?: number;
}
