import { Card } from '@/components/ui/card'
import { BookOpen, Heart, Users, Award } from 'lucide-react'

export function About() {
  const values = [
    {
      icon: BookOpen,
      title: '經典傳承',
      description: '深入教授中華經典文化，讓孩子從小接觸聖賢智慧',
    },
    {
      icon: Heart,
      title: '品格培養',
      description: '透過讀經教育，培養孩子的道德觀念與人格修養',
    },
    {
      icon: Users,
      title: '小班教學',
      description: '採用小班制教學，確保每位學生都能獲得充分關注',
    },
    {
      icon: Award,
      title: '專業師資',
      description: '由經驗豐富的教師團隊，用心陪伴孩子成長',
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">關於我們</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            我們深信經典教育是孩子成長過程中不可或缺的養分。透過系統化的讀經課程，
            讓孩子在朗朗誦讀聲中，培養語文能力、增強記憶力，更重要的是建立正確的價值觀。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-center">{value.description}</p>
              </Card>
            )
          })}
        </div>

        {/* Teacher Introduction */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div
                className="aspect-square rounded-lg bg-muted"
                style={{
                  backgroundImage: `url('/friendly-chinese-teacher-with-children.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="space-y-4 text-center md:text-left">
                <h3 className="text-2xl font-bold">師資介紹</h3>
                <p className="text-muted-foreground leading-relaxed">
                  我們的教師團隊均擁有豐富的讀經教學經驗，並持有相關教育證書。
                  每位老師都充滿愛心與耐心，致力於為孩子創造最佳的學習環境。
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  我們相信，好的老師不僅要有專業知識，更要能夠啟發孩子的學習興趣，
                  讓他們在快樂中成長，在學習中找到自信。
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
