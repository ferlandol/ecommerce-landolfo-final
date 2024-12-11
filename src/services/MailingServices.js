import emailjs from '@emailjs/browser';

const sendOrderEmail = async (order) => {
    try {
        const result = await emailjs.send(
            process.env.EMAILJS_SERVICE_ID,
            process.env.EMAILJS_ORDER_TEMPLATE_ID,
            {
                buyer_email: order.buyer.email,
                buyer_name: order.buyer.name,
                order_id: order.id,
                items: order.items.map(item => `${item.quantity}x ${item.title}`).join(', '),
                total: order.total
            },
            process.env.EMAILJS_PUBLIC_KEY
        );
        return { success: true, result };
    } catch (error) {
        console.error("Error al enviar el correo de pedido:", error);
        return { success: false, error };
    }
}

const sendContactEmail = async (form) => {
    try {
        const result = await emailjs.sendForm(
            process.env.EMAILJS_SERVICE_ID,
            process.env.EMAILJS_CONTACT_TEMPLATE_ID,
            form,
            process.env.EMAILJS_PUBLIC_KEY
        );
        return { success: true, result };
    } catch (error) {
        console.error("Error al enviar el correo de contacto:", error);
        return { success: false, error };
    }
}

export { sendOrderEmail, sendContactEmail };
