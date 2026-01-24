import { useState } from 'react';
import toast from 'react-hot-toast';
import emailjs from "@emailjs/browser";

// This function reads EmailJS config from environment variables.
const getEmailjsConfig = () => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    // Prefer the contact template id; fallback to TEMPLATE_ID for older configs.
    const templateId =
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT_ID ||
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
        '';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

    return { serviceId, templateId, publicKey };
};

// This function validates basic contact form values.
const validateContactForm = (form) => {
    try {
        const name = form?.elements?.namedItem?.('name')?.value?.trim?.() ?? '';
        const email = form?.elements?.namedItem?.('email')?.value?.trim?.() ?? '';
        const message = form?.elements?.namedItem?.('message')?.value?.trim?.() ?? '';

        const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!name || !email || !message) return { ok: false, reason: 'missing_fields' };
        if (!emailLooksValid) return { ok: false, reason: 'invalid_email' };

        return { ok: true };
    } catch {
        return { ok: true };
    }
};

const EmailService = () => {
    const [loading, setLoading] = useState(false);

    const sendEmail = async (form) => {
        try {
            setLoading(true);

            const { serviceId, templateId, publicKey } = getEmailjsConfig();

            // Debug logs for development
            console.log('[EmailJS] sending contact email', {
                hasServiceId: Boolean(serviceId),
                hasTemplateId: Boolean(templateId),
                hasPublicKey: Boolean(publicKey),
            });

            if (!serviceId || !templateId || !publicKey) {
                console.error('[EmailJS] Missing config. Add these to .env.local and restart dev server:', {
                    NEXT_PUBLIC_EMAILJS_SERVICE_ID: Boolean(serviceId),
                    NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT_ID: Boolean(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT_ID),
                    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: Boolean(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID),
                    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: Boolean(publicKey),
                });
                toast.error("Email is not configured. Please set EmailJS keys in .env.local.");
                return { success: false, reason: 'missing_config' };
            }

            const validation = validateContactForm(form);
            if (!validation.ok) {
                toast.error(
                    validation.reason === 'invalid_email'
                        ? 'Please enter a valid email address.'
                        : 'Please fill in all required fields.'
                );
                return { success: false, reason: validation.reason };
            }

            const response = await emailjs.sendForm(
                serviceId,
                templateId,
                form,
                {
                    publicKey,
                }
            );

            // console.log("SUCCESS!", response);

            toast.success("Email sent successfully!");
            form.reset();
            return { success: true, response };
        } catch (error) {
            console.error("FAILED...", error);
            // Extra guidance for the common EmailJS 400 error
            const message = String(error?.text || error?.message || '');
            if (message.toLowerCase().includes('public key is invalid')) {
                toast.error("EmailJS Public Key is invalid. Update NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in .env.local.");
                return { success: false, reason: 'invalid_public_key', error };
            } else {
                toast.error("Failed. Please try again later.");
                return { success: false, reason: 'unknown_error', error };
            }
        } finally {
            setLoading(false);
        }
    };

    return { sendEmail, loading };
};

export const sendContactEmail = async (messageData) => {
    const templateParams = {
        name: messageData.name,
        email: messageData.email,
        message: messageData.message,
    };

    try {
        const { serviceId, publicKey } = getEmailjsConfig();
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT_ID || '';

        console.log('[EmailJS] sending contact email (send)', {
            hasServiceId: Boolean(serviceId),
            hasTemplateId: Boolean(templateId),
            hasPublicKey: Boolean(publicKey),
        });

        const result = await emailjs.send(
            serviceId,
            templateId,
            templateParams,
            publicKey
        );
        return { success: true, result };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, error };
    }
};

export default EmailService;
