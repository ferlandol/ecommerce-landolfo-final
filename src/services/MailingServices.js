import emailjs from '@emailjs/browser';

// Replace these constants with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_j3jq57u';
const EMAILJS_ORDER_TEMPLATE_ID = 'service_j3jq57u';
const EMAILJS_CONTACT_TEMPLATE_ID = 'service_j3jq57u';
const EMAILJS_PUBLIC_KEY = '2UsqyFC8NCYRymqK6';

const sendOrderEmail = async (order) => {
    try {
        const result = await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_ORDER_TEMPLATE_ID,
            {
                buyer_email: order.buyer.email,
                buyer_name: order.buyer.name,
                order_id: order.id,
                items: order.items.map(item => `${item.quantity}x ${item.title}`).join(', '),
                total: order.total
            },
            EMAILJS_PUBLIC_KEY
        );
        return { success: true, result };
    } catch (error) {
        return { success: false, error };
    }
}

const sendContactEmail = async (form) => {
    try {
        const result = await emailjs.sendForm(
            EMAILJS_SERVICE_ID,
            EMAILJS_CONTACT_TEMPLATE_ID,
            form,
            EMAILJS_PUBLIC_KEY
        );
        return { success: true, result };
    } catch (error) {
        return { success: false, error };
    }
}

export { sendOrderEmail, sendContactEmail };
