'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Dialog, DialogContent } from '@/components/ui/dialog'

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      src: '/children-reading-chinese-classics-in-classroom.jpg',
      alt: '課堂學習情況',
      title: '專注的課堂時光',
    },
    {
      src: '/children-performing-chinese-poetry-recitation.jpg',
      alt: '詩詞朗誦比賽',
      title: '詩詞朗誦比賽',
    },
    {
      src: '/chinese-new-year-celebration-with-children.jpg',
      alt: '春節活動',
      title: '春節慶祝活動',
    },
    {
      src: '/children-writing-chinese-calligraphy.jpg',
      alt: '書法體驗',
      title: '書法體驗課程',
    },
    {
      src: '/group-photo-of-students-and-teacher.jpg',
      alt: '畢業合影',
      title: '畢業合影留念',
    },
    {
      src: '/children-outdoor-activity-traditional-games.jpg',
      alt: '戶外教學',
      title: '戶外教學活動',
    },
  ]

  return (
    <section id="gallery" className="py-20 md:py-32 bg-muted/50">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">活動花絮</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            記錄孩子們在讀經班的快樂時光與成長瞬間
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden cursor-pointer group hover:shadow-lg transition-shadow"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url('${image.src}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground translate-y-full group-hover:translate-y-0 transition-transform">
                  <h3 className="font-semibold">{image.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl">
            {selectedImage !== null && (
              <div className="space-y-4">
                <div
                  className="aspect-[4/3] bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: `url('${images[selectedImage].src}')` }}
                />
                <h3 className="text-xl font-bold text-center">
                  {images[selectedImage].title}
                </h3>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
