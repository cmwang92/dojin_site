'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('感謝您的留言！我們會�儘快與您聯繫。')
    setFormData({ name: '', phone: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: '聯絡電話',
      content: '(02) 2345-6789',
      link: 'tel:0223456789',
    },
    {
      icon: Mail,
      title: '電子信箱',
      content: 'info@readingclass.tw',
      link: 'mailto:info@readingclass.tw',
    },
    {
      icon: MapPin,
      title: '地址',
      content: '台北市中正區和平西路一號',
      link: 'https://maps.google.com',
    },
    {
      icon: Clock,
      title: '服務時間',
      content: '週一至週日 9:00-18:00',
      link: null,
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/50">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">聯絡我們</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            有任何問題嗎？歡迎隨時與我們聯繫
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{item.title}</h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.content}</p>
                      )}
                    </div>
                  </div>
                </Card>
              )
            })}

            {/* Map */}
            <Card className="p-4 h-64">
              <div
                className="w-full h-full rounded-lg bg-muted"
                style={{
                  backgroundImage: `url('/google-maps-location-marker.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">留言給我們</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  姓名 <span className="text-destructive">*</span>
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="請輸入您的姓名"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  聯絡電話 <span className="text-destructive">*</span>
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  placeholder="請輸入您的電話"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  電子信箱
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="請輸入您的Email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  留言內容 <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  placeholder="請告訴我們您想了解的內容"
                  rows={6}
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                送出留言
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
