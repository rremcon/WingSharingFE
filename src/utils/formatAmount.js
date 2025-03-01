// Met deze aanpak maak je de formatAmount functie herbruikbaar in je gehele app,
// en kun je bedragen efficiënt en consistent formatteren,
// zonder dat je elke keer handmatig moet omgaan met afrondingen of conversies.

/**
 * Format amount as a currency string, with optional support for cents and different currencies.
 * @param {number} amount - The amount to format (in cents by default).
 * @param {string} currency - The currency code (default is 'EUR').
 * @param {boolean} isInCents - Whether the amount is in cents (default is true).
 * @returns {string} - The formatted currency string.
 */

export const formatAmount = (amount, currency = 'EUR', isInCents = true) => {
    // If amount is in cents, divide by 100 to convert to the correct currency unit
    const value = isInCents ? amount / 100 : amount;

    // Use Intl.NumberFormat for currency formatting
    const formatter = new Intl.NumberFormat('nl-NL', {
        style: 'currency',
        currency: currency
    });

    return formatter.format(value);
};