import React from 'react';
import { ArrowRight, Heart, Users, Sparkles, Brain, Target, Compass, Star, Play, Mail, Gift, Film, BookOpen, Video, Headphones } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-900 via-purple-900 to-rose-900">
      {/* Hero Section - beHappy Community */}
      <section className="relative h-screen flex items-center justify-center text-white px-4">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1522543558187-768b6df7c25c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-purple-400">
            BeHappy Land Community
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Entdecke den wahren Sinn des Glücks und nutze die Kraft Deiner Sehnsucht für ein erfülltes Leben
          </p>
          <a href="https://www.rippso.com/go/behappyland" target="_blank">
            <button className="bg-gradient-to-r from-rose-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
              Zum Kick-off Webinar anmelden <ArrowRight className="w-5 h-5" />
            </button>
          </a>
          <b>06. Februar 2025 - 19:00h via Zoom</b>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-black/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Unsere Mission
              <span className="block text-2xl md:text-3xl text-rose-400 mt-2">
                Die Kraft der Sehnsucht nach Glück
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              BeHappy-Land entstand aus der Vision des Erlebnisfilms "Be Happy – Eine Reise ins Glück". 
              Wir stellen nicht die Frage "Wie werde ich glücklich?", sondern erforschen den tieferen Sinn:
              "Was ist der Sinn von Glück?" und "Warum haben wir alle diese immense Sehnsucht danach?"
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <Film className="w-12 h-12 text-rose-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Der Film</h3>
              <p className="text-gray-300">
                "Be Happy – Eine Reise ins Glück" von Werner Dück zeigt, wie die tief in unseren Genen verankerte 
                Sehnsucht nach Glück als essenzieller Antrieb für unser Leben dient und wie wir diese Kraft gezielt 
                für die Verwirklichung unseres Lebensplans einsetzen können.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <Users className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Die Community</h3>
              <p className="text-gray-300">
                In der BeHappy-Land Community vertiefen wir gemeinsam die Themen des Films. Hier findest Du 
                exklusive Inhalte, kannst Dich mit Gleichgesinnten vernetzen und Deinen persönlichen Weg zur 
                Selbstverwirklichung beschreiten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 bg-black/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Erlebe die BeHappy Land Community
              <span className="block text-2xl md:text-3xl text-rose-400 mt-2">
                Ein Einblick in unsere Welt
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
              Tauche ein in die inspirierende Atmosphäre unserer Community und entdecke, wie wir gemeinsam wachsen und uns entwickeln.
            </p>
          </div>
          <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl mb-12">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/NjKnBPfoJXg"
              title="BeHappy Community Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="text-center">
            <a href="https://www.rippso.com/go/behappyland" target="_blank">
              <button className="bg-gradient-to-r from-rose-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform flex items-center gap-2 mx-auto group">
                Hier zum Kick-off Webinar anmelden 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
            <div className="text-white text-bold"><b>06. Februar 2025 - 19:00h via Zoom</b></div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Deine Vorteile
              <span className="block text-2xl md:text-3xl text-rose-400 mt-2">
                Als Teil der BeHappy Land Community
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-rose-900/50 to-purple-900/50 p-8 rounded-2xl backdrop-blur-sm">
              <Gift className="w-12 h-12 text-rose-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Kostenloser Insider-Report</h3>
              <p className="text-gray-300 text-center">
                Erhalte Zugang zu unserem exklusiven Report über die fünf größten Irrwege und wie Du zurück zu 
                Deinem wahren Lebensziel findest.
              </p>
            </div>
            <div className="bg-gradient-to-br from-rose-900/50 to-purple-900/50 p-8 rounded-2xl backdrop-blur-sm">
              <BookOpen className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Exklusive Webinare</h3>
              <p className="text-gray-300 text-center">
                Nimm an regelmäßigen Info-Webinaren teil, in denen wir verschiedene Aspekte des Glücks und der 
                Selbstverwirklichung behandeln.
              </p>
            </div>
            <div className="bg-gradient-to-br from-rose-900/50 to-purple-900/50 p-8 rounded-2xl backdrop-blur-sm">
              <Mail className="w-12 h-12 text-rose-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Newsletter</h3>
              <p className="text-gray-300 text-center">
                Bleibe informiert über Neuigkeiten zum Film, neue Angebote, Seminare, Workshops und inspirierende 
                Interviews.
              </p>
            </div>
            <div className="bg-gradient-to-br from-rose-900/50 to-purple-900/50 p-8 rounded-2xl backdrop-blur-sm">
              <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Community Treffen</h3>
              <p className="text-gray-300 text-center">
                Nimm an regelmäßigen Online- und Offline-Treffen teil, vernetze Dich persönlich mit Gleichgesinnten 
                und erlebe die Kraft der Gemeinschaft.
              </p>
            </div>
            <div className="bg-gradient-to-br from-rose-900/50 to-purple-900/50 p-8 rounded-2xl backdrop-blur-sm">
              <Sparkles className="w-12 h-12 text-rose-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Online-Stammtische</h3>
              <p className="text-gray-300 text-center">
                Tausche Dich in regelmäßigen Online-Stammtischen mit anderen Mitgliedern aus, teile Deine Erfahrungen 
                und profitiere von kollektivem Wissen.
              </p>
            </div>
            <div className="bg-gradient-to-br from-rose-900/50 to-purple-900/50 p-8 rounded-2xl backdrop-blur-sm">
              <Target className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4 text-center">1:1 Coaching</h3>
              <p className="text-gray-300 text-center">
                Erhalte persönliche Unterstützung durch individuelles Coaching für Deine spezifischen Fragen und 
                Deinen einzigartigen Wachstumsprozess.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* People Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Die Personen
              <span className="block text-2xl md:text-3xl text-rose-400 mt-2">
                Die BeHappy Land Community
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-rose-900/50 to-purple-900/50 p-8 rounded-2xl backdrop-blur-sm">
              <Video className="w-12 h-12 text-rose-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Werner</h3>
              <p className="text-gray-300 text-center">
                Filmemacher und Visionär
              </p>
            </div>
            <div className="bg-gradient-to-br from-rose-900/50 to-purple-900/50 p-8 rounded-2xl backdrop-blur-sm">
              <Users className="w-12 h-12 text-rose-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Wolfram</h3>
              <p className="text-gray-300 text-center">
                Coaching & Communitymanager
              </p>
            </div>
            <div className="bg-gradient-to-br from-rose-900/50 to-purple-900/50 p-8 rounded-2xl backdrop-blur-sm">
              <Heart className="w-12 h-12 text-rose-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Tabea</h3>
              <p className="text-gray-300 text-center">
                Coaching & Support
              </p>
            </div>
            <div className="bg-gradient-to-br from-rose-900/50 to-purple-900/50 p-8 rounded-2xl backdrop-blur-sm">
              <Headphones className="w-12 h-12 text-rose-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Matthias</h3>
              <p className="text-gray-300 text-center">
                Coaching & Tech Support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 p-12 rounded-3xl backdrop-blur-md">
            <Star className="w-16 h-16 text-rose-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Starte Deine Reise zum wahren Glück
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Entdecke in unserem kostenlosen Webinar, wie Du die Kraft Deiner Sehnsucht nach Glück 
              für ein erfülltes Leben nutzen kannst.
              <br /><br />
              <b>06. Februar 2025 - 19:00h via Zoom</b>
            </p>
            <a href="https://www.rippso.com/go/behappyland" target="_blank">
              <button className="bg-gradient-to-r from-rose-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
                Jetzt kostenlos zum Webinar anmelden <ArrowRight className="w-5 h-5" />
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;