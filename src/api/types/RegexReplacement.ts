/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface RegexReplacement {
    /**
     * This is the regex replacement type. You can use this to replace a word or phrase that matches a pattern.
     *
     * Usage:
     *
     * - Replace all numbers with "some number": { type: 'regex', regex: '\\d+', value: 'some number' }
     * - Replace email addresses with "[EMAIL]": { type: 'regex', regex: '\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b', value: '[EMAIL]' }
     * - Replace phone numbers with a formatted version: { type: 'regex', regex: '(\\d{3})(\\d{3})(\\d{4})', value: '($1) $2-$3' }
     * - Replace all instances of "color" or "colour" with "hue": { type: 'regex', regex: 'colou?r', value: 'hue' }
     * - Capitalize the first letter of every sentence: { type: 'regex', regex: '(?<=\\. |^)[a-z]', value: (match) => match.toUpperCase() }
     */
    type: "regex";
    /** This is the regex pattern to replace. */
    regex: string;
    /**
     * These are the options for the regex replacement. Default all options are disabled.
     *
     * @default []
     */
    options?: Vapi.RegexOption[];
    /** This is the value that will replace the match. */
    value: string;
}
