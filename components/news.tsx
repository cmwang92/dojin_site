import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar } from 'lucide-react'

export function News() {
  const newsItems = [
    {
      date: '2025年1月15日',
      title: '春季班開始招生',
      category: '招生訊息',
      description: '2025春季班即日起開放報名，名額有限，歡迎家長來電洽詢。早鳥優惠至1月底！',
      isNew: true,
    },
    {
      date: '2025年1月10日',
      title: '春節休假公告',
      category: '公告',
      description: '農曆春節期間（1/28-2/5）停課，2月8日正常上課，祝大家新年快樂！',
      isNew: true,
    },
    {
      date: '2024年12月20日',
      title: '年度成果發表會',
      category: '活動',
      description: '12月23日下午2點舉辦年度成果發表會，歡迎家長蒞臨觀賞孩子們的精彩表演。',
      isNew: false,
    },
    {
      date: '2024年12月1日',
      title: '冬令營報名開始',
      category: '活動',
      description: '寒假冬令營即日起開放報名，為期五天的密集課程，讓孩子在假期充實自我。',
      isNew: false,
    },
  ]

  return (
    <section id="news" className="py-20 md:py-32">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">最新消息</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            掌握最新的課程資訊與活動公告
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {newsItems.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex items-center gap-3 md:min-w-40">
                  <Calendar className="h-4 w-4 text-muted-foreground shrink-0" />
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex items-start gap-3 flex-wrap">
                    <h3 className="text-xl font-bold flex-1">{item.title}</h3>
                    <div className="flex gap-2">
                      <Badge variant="outline">{item.category}</Badge>
                      {item.isNew && (
                        <Badge className="bg-accent text-accent-foreground">最新</Badge>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
