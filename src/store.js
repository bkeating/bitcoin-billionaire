import { writable } from 'svelte/store';

export const currentScreen = writable(0);
export const exampleTextInput = writable('');

export const lifelinePhoneEnabled = writable(true);
export const lifeline5050Enabled = writable(true);
export const lifelineAudienceEnabled = writable(true);

export const totalScore = writable(0);
export const currentQuestion = writable({});
export const totalQuestions = writable(0);
