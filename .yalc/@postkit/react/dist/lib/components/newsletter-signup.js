'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, chakra, Heading, Input, Text, } from '@chakra-ui/react';
import { useId, useState } from 'react';
import { usePostkit } from '../provider.js';
import { postkitNewsletterSignupRecipe, } from '../recipes/newsletter-signup.recipe.js';
import { postkitSlotClassName, usePostkitSlotRecipe, } from '../recipes/types.js';
import { postkitRecipeKeys } from '../theme.js';
const NewsletterForm = chakra('form');
const NewsletterLabel = chakra('label');
export function PostkitNewsletterSignup({ title, description, list, emailLabel = 'Email address', emailPlaceholder, buttonLabel = 'Subscribe', privacy, successMessage = 'Thanks for subscribing.', errorMessage = 'Subscription failed. Please try again.', children, rootProps, slotStyles, alignment, size, variant, unstyled, }) {
    const { newsletter } = usePostkit();
    const inputId = useId();
    const [submission, setSubmission] = useState({
        status: 'idle',
        message: '',
    });
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.newsletterSignup, postkitNewsletterSignupRecipe);
    const styles = unstyled
        ? {}
        : recipe({ alignment, size, variant });
    const { css: rootCss, className: rootClassName, ...restRootProps } = rootProps ?? {};
    const configured = Boolean(newsletter?.subscribe || newsletter?.action);
    const usesCallback = Boolean(newsletter?.subscribe);
    const emailFieldName = newsletter?.emailFieldName ?? 'email';
    const listFieldName = newsletter?.listFieldName ?? 'list';
    async function submit(event) {
        if (!newsletter?.subscribe) {
            if (!newsletter?.action)
                event.preventDefault();
            return;
        }
        event.preventDefault();
        const formElement = event.currentTarget;
        const form = new FormData(formElement);
        const email = String(form.get(emailFieldName) ?? '');
        setSubmission({ status: 'submitting', message: 'Subscribing…' });
        try {
            const result = await newsletter.subscribe({ email, list });
            formElement.reset();
            setSubmission({
                status: 'success',
                message: result?.message ?? successMessage,
            });
        }
        catch {
            setSubmission({ status: 'error', message: errorMessage });
        }
    }
    const statusMessage = submission.message ||
        (!configured ? 'Newsletter signup is not configured.' : '');
    return (_jsxs(Box, { as: "aside", "data-postkit-component": "NewsletterSignup", "data-postkit-configured": configured ? 'true' : 'false', ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [_jsxs(Box, { className: recipe.classNameMap.content, css: [styles.content, slotStyles?.content], children: [_jsx(Heading, { as: "h2", className: recipe.classNameMap.title, css: [styles.title, slotStyles?.title], children: title }), description || children ? (_jsx(Box, { className: recipe.classNameMap.description, css: [styles.description, slotStyles?.description], children: children ?? description })) : null] }), _jsxs(NewsletterForm, { action: usesCallback ? undefined : newsletter?.action, method: newsletter?.method ?? 'post', onSubmit: submit, className: recipe.classNameMap.form, css: [styles.form, slotStyles?.form], children: [_jsx(NewsletterLabel, { htmlFor: inputId, className: recipe.classNameMap.label, css: [styles.label, slotStyles?.label], children: emailLabel }), _jsxs(Box, { className: recipe.classNameMap.fields, css: [styles.fields, slotStyles?.fields], children: [_jsx(Input, { id: inputId, name: emailFieldName, type: "email", autoComplete: "email", placeholder: emailPlaceholder, required: true, disabled: submission.status === 'submitting', className: recipe.classNameMap.input, css: [styles.input, slotStyles?.input] }), _jsx(Button, { type: "submit", disabled: !configured || submission.status === 'submitting', loading: submission.status === 'submitting', className: recipe.classNameMap.submit, css: [styles.submit, slotStyles?.submit], children: buttonLabel })] }), list ? (_jsx("input", { type: "hidden", name: listFieldName, value: list })) : null, Object.entries(newsletter?.hiddenFields ?? {}).map(([name, value]) => (_jsx("input", { type: "hidden", name: name, value: value }, name))), _jsx(Text, { "aria-live": "polite", role: submission.status === 'error' ? 'alert' : 'status', className: recipe.classNameMap.status, css: [styles.status, slotStyles?.status], children: statusMessage }), privacy ? (_jsx(Text, { className: recipe.classNameMap.privacy, css: [styles.privacy, slotStyles?.privacy], children: privacy })) : null] })] }));
}
