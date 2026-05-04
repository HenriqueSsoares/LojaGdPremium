"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react"; // Este já funciona no seu site
import { toast } from "sonner";

// Ícones em SVG para evitar erros de versão do lucide-react
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const RulerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="m21.43 12.48-8.91-8.91a2 2 0 0 0-2.82 0L3.51 9.75a2 2 0 0 0 0 2.82l8.91 8.91a2 2 0 0 0 2.82 0l6.19-6.19a2 2 0 0 0 0-2.81Z"></path>
    <path d="m7.75 12.25 2.25-2.25"></path>
    <path d="m10.75 15.25 2.25-2.25"></path>
    <path d="m13.75 18.25 2.25-2.25"></path>
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const CopyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

export default function LinkBio() {
  const whatsapp1 = "5588988054374";
  const whatsapp2 = ""; // TODO: Add second number
  const instagram = "gd.premium";
  const address = "Cariri - Ceará, Brasil"; // TODO: Add real address
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    toast.success("Endereço copiado!");
  };

  return (
    <div className="min-h-[100dvh] bg-[#0f0e0c] text-[#f5f0e6] font-body flex flex-col items-center px-6 py-12 selection:bg-[#c9a227]/30 overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#c9a227]/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#c9a227]/5 blur-[120px] rounded-full" />
      </div>

      {/* Header / Profile */}
      <header className="relative z-10 flex flex-col items-center mb-12 animate-in fade-in slide-in-from-top-4 duration-1000">
        <div className="w-24 h-24 mb-6 rounded-full border-2 border-[#c9a227]/30 p-1.5 bg-[#1a1916] shadow-[0_0_50px_rgba(201,162,39,0.15)] ring-1 ring-[#c9a227]/20">
          <div className="w-full h-full rounded-full overflow-hidden bg-[#0f0e0c] flex items-center justify-center p-3 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#c9a227]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <img 
              src="/assets/logogd.png" 
              alt="GD Premium" 
              className="w-full h-auto object-contain relative z-10"
            />
          </div>
        </div>
        <h1 className="font-display text-4xl text-[#e5d4a1] mb-2 tracking-wide text-center">GD Premium</h1>
        <p className="text-[#a39e8f] text-[0.7rem] tracking-[0.3em] uppercase font-medium">Joias em Ouro 18k</p>
      </header>

      {/* Buttons Grid */}
      <main className="relative z-10 w-full max-w-[480px] flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
        
        {/* Instagram */}
        <Link 
          href={`https://www.instagram.com/${instagram}/`}
          target="_blank"
          className="group relative flex items-center gap-4 w-full p-4.5 bg-[#1a1916] border border-[#c9a227]/10 rounded-2xl transition-all duration-500 hover:bg-[#1a1916] hover:border-[#c9a227]/40 hover:-translate-y-1 active:scale-[0.98] shadow-2xl shadow-black/80 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 text-[#e5d4a1] group-hover:shadow-[0_0_20px_rgba(201,162,39,0.2)] transition-all">
            <InstagramIcon />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-[#f5f0e6] group-hover:text-[#e5d4a1] transition-colors">Instagram</h2>
            <p className="text-[0.7rem] text-[#a39e8f] group-hover:text-[#a39e8f]/80 transition-colors">Acompanhe nossas novidades e promoções</p>
          </div>
          <ChevronRight size={20} className="text-[#c9a227]/20 group-hover:text-[#c9a227] group-hover:translate-x-1 transition-all" />
        </Link>

        {/* WhatsApp 1 */}
        <Link 
          href={`https://wa.me/${whatsapp1}`}
          target="_blank"
          className="group relative flex items-center gap-4 w-full p-4.5 bg-[#1a1916] border border-[#c9a227]/10 rounded-2xl transition-all duration-500 hover:bg-[#1a1916] hover:border-[#c9a227]/40 hover:-translate-y-1 active:scale-[0.98] shadow-2xl shadow-black/80 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#25D366]/20 to-[#25D366]/5 text-[#25D366] group-hover:shadow-[0_0_20px_rgba(37,211,102,0.2)] transition-all">
            <WhatsAppIcon />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-[#f5f0e6] group-hover:text-[#e5d4a1] transition-colors">Fale Conosco (Opção 1)</h2>
            <p className="text-[0.7rem] text-[#a39e8f] group-hover:text-[#a39e8f]/80 transition-colors">Atendimento comercial e vendas</p>
          </div>
          <ChevronRight size={20} className="text-[#c9a227]/20 group-hover:text-[#c9a227] group-hover:translate-x-1 transition-all" />
        </Link>

        {/* WhatsApp 2 */}
        <Link 
          href={whatsapp2 ? `https://wa.me/${whatsapp2}` : "#"}
          target="_blank"
          className={`group relative flex items-center gap-4 w-full p-4.5 bg-[#1a1916] border border-[#c9a227]/10 rounded-2xl transition-all duration-500 hover:bg-[#1a1916] hover:border-[#c9a227]/40 hover:-translate-y-1 active:scale-[0.98] shadow-2xl shadow-black/80 overflow-hidden ${!whatsapp2 && 'opacity-50 cursor-not-allowed'}`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#25D366]/20 to-[#25D366]/5 text-[#25D366] group-hover:shadow-[0_0_20px_rgba(37,211,102,0.2)] transition-all">
            <WhatsAppIcon />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-[#f5f0e6] group-hover:text-[#e5d4a1] transition-colors">Fale Conosco (Opção 2)</h2>
            <p className="text-[0.7rem] text-[#a39e8f] group-hover:text-[#a39e8f]/80 transition-colors">{whatsapp2 ? "Linha alternativa de atendimento" : "Número em breve"}</p>
          </div>
          <ChevronRight size={20} className="text-[#c9a227]/20 group-hover:text-[#c9a227] group-hover:translate-x-1 transition-all" />
        </Link>

        {/* Guia de Medidas */}
        <Link 
          href="/guia-medidas"
          className="group relative flex items-center gap-4 w-full p-4.5 bg-[#1a1916] border border-[#c9a227]/10 rounded-2xl transition-all duration-500 hover:bg-[#1a1916] hover:border-[#c9a227]/40 hover:-translate-y-1 active:scale-[0.98] shadow-2xl shadow-black/80 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 text-[#e5d4a1] group-hover:shadow-[0_0_20px_rgba(201,162,39,0.2)] transition-all">
            <RulerIcon />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-[#f5f0e6] group-hover:text-[#e5d4a1] transition-colors">Guia de Medidas</h2>
            <p className="text-[0.7rem] text-[#a39e8f] group-hover:text-[#a39e8f]/80 transition-colors">Encontre o tamanho perfeito para sua joia</p>
          </div>
          <ChevronRight size={20} className="text-[#c9a227]/20 group-hover:text-[#c9a227] group-hover:translate-x-1 transition-all" />
        </Link>

        {/* Address Card */}
        <div className="mt-4 p-6 bg-[#1a1916] border border-[#c9a227]/10 rounded-3xl shadow-2xl shadow-black/80 backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <MapPinIcon />
          </div>
          <div className="flex items-start gap-4 mb-6 relative z-10">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#c9a227]/10 text-[#c9a227]">
              <MapPinIcon />
            </div>
            <div className="flex-1">
              <h2 className="font-display text-2xl text-[#e5d4a1] mb-1">Nosso Local</h2>
              <p className="text-[0.8rem] text-[#a39e8f] leading-relaxed max-w-[200px]">{address}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 relative z-10">
            <button 
              onClick={copyAddress}
              className="flex items-center justify-center gap-2 py-3 px-4 bg-[#22211d] border border-[#c9a227]/10 rounded-xl text-[0.7rem] font-semibold text-[#a39e8f] hover:text-[#e5d4a1] hover:border-[#c9a227]/30 transition-all active:scale-95 uppercase tracking-wider"
            >
              <CopyIcon />
              Copiar
            </button>
            <Link 
              href={mapsUrl}
              target="_blank"
              className="flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-br from-[#c9a227] to-[#9a7b0a] rounded-xl text-[0.7rem] font-bold text-[#0f0e0c] hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-[#c9a227]/10 uppercase tracking-wider"
            >
              <ExternalLinkIcon />
              Navegar
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-auto pt-16 pb-4 text-center opacity-40 hover:opacity-100 transition-opacity duration-700">
        <p className="text-[0.6rem] text-[#a39e8f] tracking-[0.4em] uppercase font-bold">
          GD Premium — Atemporal & Sofisticado
        </p>
      </footer>
    </div>
  );
}
