// Public form endpoint only. Set after verifying the recipient in Formspree.
// Never place an API key, mailbox password or management token here.
export const formspreeEndpoint = '';

export const automaticConsultationEnabled = Boolean(formspreeEndpoint);
