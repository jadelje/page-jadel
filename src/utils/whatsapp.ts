export const WHATSAPP_NUMBER = import.meta.env.PUBLIC_WHATSAPP_NUMBER || "573000000000";

export function whatsappLink(message?: string): string {
  const text = encodeURIComponent(
    message || "Hola, vi la página de DPERSA TICS y quisiera consultar sobre mi infraestructura."
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
