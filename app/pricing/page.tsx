import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Users, MessageSquare, PlusCircle, Sparkles, Zap, TrendingUp, Building2, Clock, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Match AI Prijzen | Flexibel Cafetaria Model',
  description: 'Transparante prijzen voor Match AI. Start vanaf €2.000/maand met flexibele add-ons. Schaal wanneer jij dat wilt.',
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Transparante <span className="text-orange-500">prijzen</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Betaal alleen voor wat je nodig hebt. Start klein, schaal wanneer je groeit. 
              Geen verrassingen, geen verborgen kosten.
            </p>
          </div>
        </div>
      </section>

      {/* Cafetaria Model Intro */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="mx-auto mb-6 text-orange-500" size={48} />
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Het <span className="text-orange-500">Cafetaria Model</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Kies je basis pakket en breidt uit met add-ons wanneer je team groeit. 
              Net zoals in een cafetaria: je pakt wat je nodig hebt.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <Zap className="text-orange-500 mb-3 mx-auto" size={40} />
                <h3 className="text-lg font-bold text-white mb-2">Start snel</h3>
                <p className="text-gray-400 text-sm">Binnen 48 uur operationeel met je eerste AI agents</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <TrendingUp className="text-orange-500 mb-3 mx-auto" size={40} />
                <h3 className="text-lg font-bold text-white mb-2">Schaal flexibel</h3>
                <p className="text-gray-400 text-sm">Voeg users en topics toe wanneer jij dat wilt</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <Shield className="text-orange-500 mb-3 mx-auto" size={40} />
                <h3 className="text-lg font-bold text-white mb-2">Geen lock-in</h3>
                <p className="text-gray-400 text-sm">Maandelijks opzegbaar, geen verplichte jaardeal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Base Package */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12 text-center">
              Start met je eerste <span className="text-orange-500">AI Agent instantie</span>
            </h2>
            
            <div className="relative mb-16">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border-2 border-orange-500 p-8 md:p-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                  <div>
                    <div className="inline-block px-4 py-2 bg-orange-500 text-white font-bold rounded-full text-sm mb-4">
                      BASE PAKKET
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-2">AI Agent Instantie</h3>
                    <p className="text-gray-300 text-lg">Jouw persoonlijke AI team, direct inzetbaar</p>
                  </div>
                  <div className="mt-6 md:mt-0 text-right">
                    <div className="text-5xl md:text-6xl font-black text-white mb-2">
                      €2.000
                      <span className="text-xl text-gray-400 font-normal">/maand</span>
                    </div>
                    <p className="text-gray-400">per instantie</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <MessageSquare className="text-orange-500" size={24} />
                      Inclusief
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                        <div>
                          <span className="text-white font-bold">Tot 5 topics</span>
                          <p className="text-gray-400 text-sm">Bijvoorbeeld: Sales, Support, HR, Finance, Marketing</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                        <div>
                          <span className="text-white font-bold">Tot 10 gebruikers</span>
                          <p className="text-gray-400 text-sm">Toegang voor je hele kernteam</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                        <div>
                          <span className="text-white font-bold">24/7 AI beschikbaarheid</span>
                          <p className="text-gray-400 text-sm">Jouw agents werken dag en nacht</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                        <div>
                          <span className="text-white font-bold">CRM integraties</span>
                          <p className="text-gray-400 text-sm">HubSpot, Salesforce, Pipedrive en meer</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Zap className="text-orange-500" size={24} />
                      Ook inbegrepen
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                        <div>
                          <span className="text-white font-bold">Onboarding & training</span>
                          <p className="text-gray-400 text-sm">Persoonlijke setup binnen 48 uur</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                        <div>
                          <span className="text-white font-bold">Support & updates</span>
                          <p className="text-gray-400 text-sm">Dedicated support team + gratis updates</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                        <div>
                          <span className="text-white font-bold">Analytics dashboard</span>
                          <p className="text-gray-400 text-sm">Real-time inzicht in performance</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                        <div>
                          <span className="text-white font-bold">Maandelijks opzegbaar</span>
                          <p className="text-gray-400 text-sm">Geen lange termijn verplichtingen</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 border-t border-white/10">
                  <Link
                    href="mailto:jarno@match-day.nl"
                    className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg text-center"
                  >
                    Start vandaag
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <PlusCircle className="mx-auto mb-6 text-orange-500" size={48} />
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                Groei mee met <span className="text-orange-500">flexibele add-ons</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Team groeit? Meer topics nodig? Voeg toe wanneer jij dat wilt. Direct actief, geen setup kosten.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Extra Users */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8 hover:border-orange-500/50 transition-all">
                <Users className="text-orange-500 mb-4" size={40} />
                <h3 className="text-2xl font-bold text-white mb-2">Extra Gebruikers</h3>
                <div className="text-4xl font-black text-white mb-4">
                  €250
                  <span className="text-lg text-gray-400 font-normal">/maand</span>
                </div>
                <p className="text-gray-300 mb-6">per 5 extra gebruikers</p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">+5 gebruikers per add-on</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">Maximaal 20 users per instantie</span>
                  </li>
                </ul>
              </div>
              
              {/* Extra Topics */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8 hover:border-orange-500/50 transition-all">
                <MessageSquare className="text-orange-500 mb-4" size={40} />
                <h3 className="text-2xl font-bold text-white mb-2">Extra Topics</h3>
                <div className="text-4xl font-black text-white mb-4">
                  €250
                  <span className="text-lg text-gray-400 font-normal">/maand</span>
                </div>
                <p className="text-gray-300 mb-6">per 5 extra topics</p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">+5 topics per add-on</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">Maximaal 50 topics per instantie</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Limits */}
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30 p-6">
              <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <Shield className="text-blue-400" size={24} />
                Limieten per instantie
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                <div className="flex items-center gap-2">
                  <Users className="text-blue-400" size={20} />
                  <span><strong className="text-white">Maximaal 20 gebruikers</strong> (base 10 + 2 add-ons)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="text-blue-400" size={20} />
                  <span><strong className="text-white">Maximaal 50 topics</strong> (base 5 + 9 add-ons)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Instances */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Building2 className="mx-auto mb-6 text-orange-500" size={48} />
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                Meerdere teams? <span className="text-orange-500">Schaal met extra instanties</span>
              </h2>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-orange-500/50 p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                  <h3 className="text-3xl font-black text-white mb-2">Extra AI Agent Instantie</h3>
                  <p className="text-gray-300 text-lg">Volledige isolatie, eigen users & topics</p>
                </div>
                <div className="mt-6 md:mt-0 text-right">
                  <div className="text-5xl font-black text-white mb-2">
                    €1.750
                    <span className="text-xl text-gray-400 font-normal">/maand</span>
                  </div>
                  <p className="text-gray-400">per extra instantie</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <span className="text-white font-bold">Volledig geïsoleerd</span>
                      <p className="text-gray-400 text-sm">Aparte data, users, topics</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <span className="text-white font-bold">Zelfde pakket</span>
                      <p className="text-gray-400 text-sm">5 topics + 10 users standaard</p>
                    </div>
                  </li>
                </ul>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <span className="text-white font-bold">Add-ons beschikbaar</span>
                      <p className="text-gray-400 text-sm">Schaal elke instantie apart</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <span className="text-white font-bold">Volumevoordeel</span>
                      <p className="text-gray-400 text-sm">€250 korting per extra instantie</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-12 text-center shadow-2xl">
            <Clock className="mx-auto mb-6 text-white/80" size={48} />
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Klaar om te starten met Match AI?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Neem contact op en ontdek hoe Match AI jouw team kan transformeren.
            </p>
            <Link
              href="mailto:jarno@match-day.nl"
              className="inline-block px-8 py-4 bg-white hover:bg-gray-100 text-orange-500 font-bold rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Neem contact op
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
