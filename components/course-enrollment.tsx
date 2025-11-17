import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check, Download, Clock, MapPin, Users, DollarSign } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function CourseEnrollment() {
  const benefits = [
    '提供完整的教材與學習資源',
    '定期舉辦成果發表會',
    '提供學習進度報告',
    '享有優先參加特別活動的權利',
  ]

  const faqs = [
    {
      question: '需要準備什麼教材嗎？',
      answer: '不需要，我們會提供所有必要的教材與講義，家長只需準備筆記本即可。',
    },
    {
      question: '可以試聽嗎？',
      answer: '可以！我們提供免費試聽一堂課的機會，歡迎來電預約試聽時間。',
    },
    {
      question: '如果缺課可以補課嗎？',
      answer: '可以的，請提前告知老師，我們會安排適當的補課時間。',
    },
    {
      question: '學費是否包含教材費？',
      answer: '是的，學費已包含所有教材費用，不另外收費。',
    },
    {
      question: '是否有兄弟姊妹優惠？',
      answer: '有的，第二位子女享9折優惠，第三位以上享8折優惠。',
    },
  ]

  return (
    <section id="courses" className="py-20 md:py-32 bg-muted/50">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">課程與報名</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            專為兒童設計的經典讀經課程，循序漸進引導孩子進入經典的世界
          </p>
        </div>

        {/* Course Info */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-8">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-2xl font-bold">兒童讀經班</h3>
              <Badge variant="secondary" className="text-base">6-12歲</Badge>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-muted-foreground">教學內容</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>論語選讀</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>唐詩三百首</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>弟子規</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>三字經</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-muted-foreground">教學方式</h4>
                <p className="leading-relaxed">
                  結合故事講解與互動式教學，加深孩子對經典的理解與記憶，培養良好的品格與思辨能力
                </p>
              </div>

              <div className="pt-6 border-t grid md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">上課時間</p>
                    <p className="text-sm text-muted-foreground">每週六 14:00-16:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">班級人數</p>
                    <p className="text-sm text-muted-foreground">15人小班教學</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">上課地點</p>
                    <p className="text-sm text-muted-foreground">台北市中正區</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Fee Information */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                <DollarSign className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold">學費資訊</h3>
            </div>

            <div className="flex items-center justify-between mb-6 p-6 bg-muted/50 rounded-lg">
              <div>
                <p className="text-sm text-muted-foreground mb-1">每週2小時課程</p>
                <p className="text-3xl font-bold text-primary">NT$ 3,800/月</p>
              </div>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Enrollment Steps */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">報名方式</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                  1
                </div>
                <h4 className="font-bold">填寫報名表</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  下載報名表格或線上填寫
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                  2
                </div>
                <h4 className="font-bold">預約試聽</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  安排適合的試聽時間
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                  3
                </div>
                <h4 className="font-bold">完成繳費</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  繳交學費後即可開始上課
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <Button size="lg">
                <Download className="mr-2 h-4 w-4" />
                下載報名表
              </Button>
              <Button size="lg" variant="outline">
                線上報名
              </Button>
            </div>
          </Card>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">常見問題</h3>
          <Card className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </div>
    </section>
  )
}
