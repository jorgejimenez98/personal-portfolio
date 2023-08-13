/**
 * This function capitalizes the first letter of a string.
 * Taken from https://stackoverflow.com/a/1026087/1015046
 * @param text The text to capitalize
 * @returns The capitalized text
 */
export function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}
