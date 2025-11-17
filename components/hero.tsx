import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      {/* Desktop Background Image */}
      <div
        className="absolute inset-0 z-0 hidden md:block"
        style={{
          backgroundImage: `url('/images/hero-desktop.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Mobile Background Image */}
      <div
        className="absolute inset-0 z-0 block md:hidden"
        style={{
          backgroundImage: `url('/images/hero-mobile.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">傳承經典文化</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
            啟蒙智慧
            <br />
            <span className="text-primary">從讀經開始</span>
          </h1>
          
          <p className="hidden md:block text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
            透過論語、唐詩、弟子規等經典教學，培養孩子的品格修養與文化素養，在快樂中學習，在誦讀中成長
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="group" asChild>
              <Link href="#enrollment">
                立即報名
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#courses">了解課程</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">年教學經驗</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">學員人數</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">家長滿意度</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
